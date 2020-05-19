import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Button,
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

export default function CardX(props) {
  return (
    <ScrollView horizontal={true} style={{ padding: 15 }}>
      <TouchableOpacity
        style={[styles.profile_card, { marginRight: 15 }]}
        // onPress={this.onPress}
        activeOpacity={0.8}>
        {props.loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
            <ImageBackground
              source={require('../assets/imgs/girl1.jpg')}
              style={styles.profile_card_img}
              imageStyle={{ borderRadius: 15 }}>
              <Image
                style={styles.starIcon}
                source={require('../assets/imgs/ic_favorite_uncheck.png')}
              />
              <Text style={styles.profile_card_text}>
                Newcomer, female actor, supporting actor Casting / Male /
                Female Model Casting
                  </Text>
            </ImageBackground>
          )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.profile_card, { marginRight: 15 }]}
        // onPress={this.onPress}
        activeOpacity={0.8}>
        {props.loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
            <ImageBackground
              source={require('../assets/imgs/girl2.jpg')}
              style={styles.profile_card_img}
              imageStyle={{ borderRadius: 15 }}>
              <Image
                style={styles.starIcon}
                source={require('../assets/imgs/ic_favorite_uncheck.png')}
              />
              <Text style={styles.profile_card_text}>
                Newcomer, female actor, supporting actor Casting / Male /
                Female Model Casting
                  </Text>
            </ImageBackground>
          )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.profile_card, { marginRight: 15 }]}
        // onPress={this.onPress}
        activeOpacity={0.8}>
        {props.loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
            <ImageBackground
              source={require('../assets/imgs/girl3.jpeg')}
              style={styles.profile_card_img}
              imageStyle={{ borderRadius: 15 }}>
              <Image
                style={styles.starIcon}
                source={require('../assets/imgs/ic_favorite_uncheck.png')}
              />
              <Text style={styles.profile_card_text}>
                Newcomer, female actor, supporting actor Casting / Male /
                Female Model Casting
                  </Text>
            </ImageBackground>
          )}
      </TouchableOpacity>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },

  profile_card_heading: {
    fontSize: 13,
    fontWeight: 'bold',
  },

  profile_card_text: {
    fontSize: 14,
    position: 'absolute',
    backgroundColor: 'white',
    padding: 5,
    bottom: 0,
    opacity: 0.5,
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  starIcon: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
    position: 'absolute',
    top: 10,
    left: 10,
  },

  profile_card_img: {
    width: 150,
    height: 190,
  },

});