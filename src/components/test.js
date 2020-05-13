import React, { useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  AsyncStorage,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

const checkUser = async navigation => {
  let utoken = await AsyncStorage.getItem('utoken');
  console.log(utoken, 'utoken is the11111111');
  if (utoken == null) {
    console.log(utoken, 'utoken is the');
    navigation.navigate('SignIn');
  } else {
    navigation.navigate('MainPage');
  }

};

const Example = ({ navigation }) => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
    checkUser(navigation);
  }, [navigation]);

  checkUser(navigation);

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Example;
