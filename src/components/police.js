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
  ImageBackground,
} from 'react-native';
import { BASE_URL } from '../constants';

export default class MyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    console.log(
      this.props,
      'dddddddddd',
      this.props.navigation.getParam('dept_id', 0),
    );

    return (
      <View>
        <Text>Police page</Text>
      </View>
    );
  }
}

