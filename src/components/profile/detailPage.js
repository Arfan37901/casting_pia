import React, { Component } from 'react';

import { StyleSheet, Image, Text, ScrollView } from 'react-native';
import { Badge, Card, Button } from 'react-native-elements';
import AudCard from './audCard';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    img: require('../../assets/imgs/card1.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: require('../../assets/imgs/card2.jpg'),
  },
];

export default class AuditionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      dataList: [],
    };
  }

  componentDidMount() { }

  render() {
    console.log(this.props, 'props of audition detail');
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Text style={[styles.heading, { fontSize: 15 }]}>Casting Pia</Text>
        <Text style={styles.paragraph}>
          Newcomer, female actor, supporting actor Casting / Male / Female Model
          Casting
        </Text>
        <Image
          style={styles.newsCard}
          source={require('../../assets/imgs/card1.jpg')}
        />

        <Text style={styles.heading}>DETAILS</Text>
        <Text style={styles.paragraph}>
          Newcomer, female actor, supporting actor Casting / Male / Female Model
          Casting Newcomer, female actor, supporting actor Casting / Male /
          Female Model Casting
        </Text>

        <Image
          style={styles.newsCard2}
          source={require('../../assets/imgs/card1.jpg')}
        />

        <AudCard />

        <AudCard />

        <Text style={[styles.heading, { fontSize: 15 }]}>LOCATION</Text>

        <Card containerStyle={{ padding: 1, borderRadius: 15 }}>
          <Image
            style={{ width: '100%', height: 200, borderRadius: 15 }}
            source={require('../../assets/imgs/map.jpg')}
          />
        </Card>
        <Button
          buttonStyle={{ width: '90%', alignSelf: 'center', borderRadius: 10, backgroundColor: 'gray', marginTop: 5 }}
          title="Company Information"
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  newsCard: {
    width: '90%',
    height: 170,
    borderRadius: 5,
    margin: 5,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },

  map: {
    height: 400,
    marginTop: 80,
  },

  cardItemView: {
    flexDirection: 'row',
    margin: 5,
  },

  button: {
    alignItems: 'center',
    // backgroundColor: '#00023A',
    alignSelf: 'center',
    width: 150,
    borderRadius: 100,
  },

  h2: {
    width: '35%',
    fontWeight: 'bold',
  },

  newsCard2: {
    width: '90%',
    height: 450,
    borderRadius: 5,
    margin: 5,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },

  heading: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 15,
    paddingBottom: 0,
  },

  paragraph: {
    padding: 10,
    paddingTop: 5,
    fontSize: 12,
  },
});
