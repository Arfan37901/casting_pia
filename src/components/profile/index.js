/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  // Button,
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Button, ListItem} from 'react-native-elements';

const list = [
  {
    title: 'Profile Settings',
    icon: 'av-timer',
    avatar_url: require('../../assets/imgs/ic_profile.png'),
  },
  {
    title: 'My casting announcement',
    icon: 'flight-takeoff',
    avatar_url: require('../../assets/imgs/ic_casting_announcement.png'),
  },
  {
    title: 'Push Alarm',
    icon: 'av-timer',
    avatar_url: require('../../assets/imgs/ic_push_alarm.png'),
  },
  {
    title: 'Terms and policies',
    icon: 'flight-takeoff',
    avatar_url: require('../../assets/imgs/ic_terms_And_policies.png'),
  },
  {
    title: 'Notice',
    icon: 'av-timer',
    avatar_url: require('../../assets/imgs/ic_notice.png'),
  },
  {
    title: 'Service center',
    icon: 'flight-takeoff',
    avatar_url: require('../../assets/imgs/ic_service_center.png'),
  },
];

export default class Auditions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      dataList: [],
    };
  }

  componentDidMount() {}

  render() {
    console.log(this.props, 'props of audition detail');
    return (
      <ScrollView>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#F0F0F0',
            paddingTop: 10,
          }}>
          <View style={{width: '65%', paddingTop: 32, marginBottom: 15}}>
            <Text style={styles.h1}>Gimpia</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>Current reserve </Text>
              <Image
                style={{width: 22, height: 22, resizeMode: 'stretch'}}
                source={require('../../assets/imgs/ic_casting_pia_without_txt.png')}
              />
              <Text style={{fontWeight: 'bold'}}> 100 copies</Text>
            </View>
          </View>
          <View>
            <Image
              source={require('../../assets/imgs/girl1.jpg')}
              style={styles.profileImg}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
            marginBottom: 10,
          }}>
          <Button
            title="Profile"
            type="solid"
            buttonStyle={{width: '85%', borderRadius: 50}}
          />
          <Button
            title="Log out"
            buttonStyle={{
              backgroundColor: 'white',
              width: '85%',
              borderRadius: 50,
            }}
            titleStyle={{color: 'black'}}
          />
        </View>

        <View>
          {list.map((item, i) => (
            <ListItem
              key={i}
              contentContainerStyle={{padding: 5}}
              title={item.title}
              titleStyle={{fontWeight: 'bold'}}
              leftElement=<Image
                source={item.avatar_url}
                style={{width: 21, height: 24, resizeMode: 'stretch'}}
              />
              bottomDivider
              chevron
            />
          ))}
        </View>
      </ScrollView>

      // <FlatList
      //   data={DATA}
      //   contentContainerStyle={{ backgroundColor: 'white' }}
      //   renderItem={({ item, index }) => (
      //     <TouchableOpacity
      //       onPress={() => this.props.navigation.navigate('Audition')}
      //       activeOpacity={0.8}>
      //       <Image
      //         style={styles.newsCard}
      //         source={item.img}
      //       />
      //     </TouchableOpacity>
      //   )}
      //   keyExtractor={item => item.id}
      // // extraData={selected}
      // />
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  profileImg: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 5,
  },

  newsCard: {
    width: '95%',
    height: 170,
    borderRadius: 5,
    margin: 5,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
});
