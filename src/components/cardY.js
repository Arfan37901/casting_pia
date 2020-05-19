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
  FlatList,
  ImageBackground,

} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }, {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function CardY(props) {
  return (
    <FlatList
      data={DATA}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ margin: 7 }}
          // onPress={this.onPress}
          activeOpacity={0.8}>
          {props.loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
              <ImageBackground
                source={require('../assets/imgs/card_border.png')}
                style={styles.profile_card_img2}
                imageStyle={{ resizeMode: 'stretch' }}
              // imageStyle={{ borderRadius: 15 }}
              >

                <View style={{
                  flexDirection: 'row', position: 'absolute', bottom: 0, padding: 7,
                  justifyContent: 'space-between'
                }}>
                  <View>
                    <Text style={styles.profile_card_heading}>Casting Pia</Text>
                    <Text style={styles.profile_card_text2}>
                      Cast Cast Movie Women
            </Text>
                  </View>
                  <Image
                    style={styles.starIcon2}
                    source={require('../assets/imgs/ic_favorite_checked.png')}
                  />
                </View>


              </ImageBackground>
            )}
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    // extraData={selected}
    />
  );
}


const styles = StyleSheet.create({

  profile_card_img2: {
    width: 155,
    height: 130,
    resizeMode: 'stretch',
  },

  profile_card_heading: {
    fontSize: 13,
    fontWeight: 'bold',
  },

  profile_card_text2: {
    fontSize: 10,
  },

  starIcon2: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },


});