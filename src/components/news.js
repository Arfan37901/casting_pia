import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    img: require(`../assets/imgs/news1.jpg`),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: require(`../assets/imgs/news3.jpg`),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    img: require(`../assets/imgs/news1.jpg`),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: require(`../assets/imgs/news3.jpg`),
  },
];

export default class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      dataList: [],
    };
  }

  componentDidMount() { }

  render() {
    return (
      <FlatList
        data={DATA}
        contentContainerStyle={{backgroundColor:'white'}}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.8}>
            <Image
              style={styles.newsCard}
              source={item.img}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      // extraData={selected}
      />
    );
  }
}

const styles = StyleSheet.create({

  newsCard: {
    width: '95%',
    height: 170,
    borderRadius: 5,
    margin: 5,
    resizeMode: 'stretch',
    alignSelf: 'center'
  },


});
