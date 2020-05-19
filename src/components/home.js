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
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardX from "./cardX";
import CardY from "./cardY";



export default class MyProject extends Component {
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
      <ScrollView>
        <View style={styles.MainContainer}>
          <Image
            style={styles.banner}
            source={require('../assets/banners/banner_1.png')}
          />

          <View style={styles.searchSection}>
            <TextInput
              placeholder="Please enter your desired keyword"
              style={styles.input}
              onChangeText={text =>
                this.setState({ email: text, loading: false })
              }
              underlineColorAndroid="transparent"
            />
            <Image
              style={styles.searchIcon}
              source={require('../assets/imgs/btn_search.png')}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'flex-start',
              marginLeft: 30,
            }}>
            <Badge
              textStyle={styles.badge_active}
              value="Premium"
              status="success"
            />
            <Text style={styles.badge}>CASTING</Text>
          </View>

          <CardX />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'flex-start',
              marginLeft: 30,
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Badge textStyle={styles.badge_active} value="Hot" />
              <Text style={styles.badge}>CASTING</Text>
          </View>

          <CardY />

          <Image
            style={styles.banner}
            source={require('../assets/banners/banner_2.png')}
          />



          <CardY />

          <Image
            style={styles.banner}
            source={require('../assets/banners/banner_3.png')}
          />

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    backgroundColor:'white'
  },

  banner: {
    width: '100%',
    height: 170,
    resizeMode: 'stretch',
  },

  headerIcon: {
    width: 22,
    height: 23,
    resizeMode: 'contain',
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    width: '90%',
    height: 45,
    borderRadius: 50,
    margin: 10,
  },
  searchIcon: {
    height: 36,
    width: 55,
    resizeMode: 'stretch',
    marginRight: 7,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 20,
    borderRadius: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    backgroundColor: '#F0F0F0',
    color: '#424242',
  },

  badge_active: {
    padding: 5,
    backgroundColor: '#8E6EFF',
    borderRadius: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  },

  badge: {
    // padding: 5,
    backgroundColor: 'transparent',
    borderRadius: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
