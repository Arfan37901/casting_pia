import React, {Component} from 'react';

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
  TouchableHighlight,
  NetInfo,
  AsyncStorage,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {BASE_URL} from '../constants';

export default class MyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.state.email);

    return (
      <ScrollView>
        {/* <View style={[styles.container, styles.horizontal]}> */}

        {/* </View> */}

        <View style={styles.MainContainer}>
  

          <Text
            style={{
              color: '#fff',
              fontSize: 28,
              fontWeight: 'bold',
              margin: 20,
            }}>
            WELCOME
          </Text>

          <TextInput
            placeholder="Email"
            style={styles.inputStyle}
            // inlineImageLeft="emailInput"
            onChangeText={text => this.setState({email: text, loading: false})}
          />
          <TextInput
            placeholder="Password"
            onChangeText={text =>
              this.setState({password: text, loading: false})
            }
            style={styles.inputStyle}
            // inlineImageLeft="emailInput"
          />

          <View style={{flexDirection: 'column', margin: 10}}>
            <View style={{flexDirection: 'row'}}>
              <CheckBox
                value={this.state.checked}
                tintColors={{true: '#00023A', false: '#00023A'}}
                onValueChange={() =>
                  this.setState({checked: !this.state.checked})
                }
              />
              <Text style={{marginTop: 5, color: '#fff'}}>
                {' '}
                I agree to the{' '}
              </Text>
              <TouchableHighlight
                onPress={() =>
                  this.props.navigation.navigate('TermsConditions')
                }>
                <Text
                  style={{
                    marginTop: 5,
                    color: '#fff',
                    textDecorationLine: 'underline',
                  }}>
                  Terms & Conditions
                </Text>
              </TouchableHighlight>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            {this.state.loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text style={{color: '#fff', marginTop: 8, fontSize: 19}}>
                Log In
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9e1515',
    height: Dimensions.get('window').height - 30,
    // justifyContent: 'center',
    // justifyContent: 'space-around',
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

  inputStyle: {
    backgroundColor: 'white',
    paddingLeft: 25,
    width: '80%',
    borderRadius: 50,
    height: 60,
    marginTop: 15,
  },

  imageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 55,
    // textAlign: 'center',
    alignContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00023A',
    width: '80%',
    padding: 10,
    height: 60,
    marginTop: 20,
    borderRadius: 50,
  },
});
