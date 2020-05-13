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
  CheckBox,
  AsyncStorage,
} from 'react-native';
import { BASE_URL } from '../constants';

export default class MyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      dataList: [],
    };
  }

  componentDidMount() {

  }

  render() {


    return (
      <ScrollView>
        <View style={styles.MainContainer}>
          <Text>main page</Text>
        </View>
      </ScrollView>
    );
  }
}

