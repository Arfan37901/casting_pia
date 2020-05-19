import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Badge, Card, Button} from 'react-native-elements';

export default function CardY(props) {
  return (
    <View>
      <Card containerStyle={{borderRadius: 15, marginBottom: 10}}>
        <View style={styles.cardItemView}>
          <Text style={styles.h2}>Classification</Text>
          <Text style={{width: '70%'}}>Drama</Text>
        </View>

        <View style={styles.cardItemView}>
          <Text style={styles.h2}>Age</Text>
          <Text style={{width: '70%'}}>20 years-25 years</Text>
        </View>

        <View style={styles.cardItemView}>
          <Text style={styles.h2}>Gender</Text>
          <Text style={{width: '70%'}}>Female</Text>
        </View>

        <View style={styles.cardItemView}>
          <Text style={styles.h2}>Career</Text>
          <Text style={{width: '70%'}}>Inelevent</Text>
        </View>

        <View style={styles.cardItemView}>
          <Text style={styles.h2}>Personnel</Text>
          <Text style={{width: '70%'}}>2 Persons</Text>
        </View>

        <View style={styles.cardItemView}>
          <Text style={styles.h2}>Applications</Text>
          <Text style={{width: '70%'}}>2</Text>
        </View>
      </Card>

      <TouchableOpacity
        style={[styles.button, {marginRight: 15}]}
        // onPress={this.onPress}
        activeOpacity={0.8}>
        <ImageBackground
          source={require('../../assets/imgs/bg_btn_gradient.png')}
          style={{width: '100%', height: 45}}
          imageStyle={{borderRadius: 50}}>
          <Text style={styles.buttonText}>Apply</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  newsCard: {
    width: '95%',
    height: 170,
    borderRadius: 5,
    margin: 5,
    resizeMode: 'stretch',
    alignSelf: 'center',
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
  buttonText: {
    color: '#fff',
    marginTop: 7,
    fontSize: 19,
    textAlign: 'center',
  },

  h2: {
    width: '35%',
    fontWeight: 'bold',
  },

  newsCard2: {
    width: '95%',
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
