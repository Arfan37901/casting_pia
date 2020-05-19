import React, { useReducer } from 'react';

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
  TouchableHighlight,
  AsyncStorage,
  NetInfo,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
  Linking,
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { BASE_URL } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

function MyProject(props) {
  // const [state, dispatch] = useReducer(reducer, initialState);
  console.log(props, 'ppppppppppppppppppppppppppp')
  return (
    <ScrollView>
      <View style={styles.MainContainer}>
        <Image
          source={require('../assets/imgs/logo.png')}
          style={styles.logo}
        />

        <View style={styles.searchSection}>
          <Icon
            style={styles.searchIcon}
            name="envelope-o"
            size={17}
            color="#000"
          />
          <TextInput
            placeholder="Email"
            style={styles.input}

            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.searchSection}>
          <Icon
            style={styles.searchIcon}
            name="lock"
            size={20}
            color="#000"
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"

            underlineColorAndroid="transparent"
            style={styles.input}
          />
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'space-between', }}>
          <CheckBox
            containerStyle={{ backgroundColor: 'none' }}
            center
            title='Save ID'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={true}
          />

          <CheckBox
            containerStyle={{ backgroundColor: 'none' }}
            center
            title='Auto-Login'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={true}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <TouchableOpacity
            style={[styles.button, { marginRight: 15 }]}
            onPress={() => {
              props.dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
              AsyncStorage.setItem('userToken', ' dumy-token')
            }}
            activeOpacity={0.8}>
            {/* {this.state.loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : ( */}
            <ImageBackground source={require('../assets/imgs/bg_btn_gradient.png')}
              style={{ width: '100%', height: 50 }}
              imageStyle={{ borderRadius: 50 }}
            >
              <Text style={{ color: '#fff', marginTop: 11, fontSize: 19, textAlign: 'center' }}>
                Log In
                </Text>
            </ImageBackground>
            {/* )} */}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { marginLeft: 15 }]}
            // onPress={this.onPress}
            activeOpacity={0.8}>
            {/* {this.state.loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : ( */}
            <ImageBackground source={require('../assets/imgs/bg_btn_border_gradient.png')}
              style={{ width: '100%', height: 50 }}
              imageStyle={{ borderRadius: 50, resizeMode: 'stretch' }}
            >
              <Text style={{ marginTop: 11, fontSize: 19, textAlign: 'center' }}>
                Sign Up
                </Text>
            </ImageBackground>
            {/* )} */}
          </TouchableOpacity>
        </View>

        <Text
          style={{
            textDecorationLine: 'underline',
            marginTop: 5,
          }}
          onPress={() => Linking.openURL('http://www.pdwatchapp.com')}>
          Forgot ID / Password?
          </Text>


        <TouchableOpacity
          style={[styles.button100, { backgroundColor: '#E0E0E0', paddingTop: 14 }]}
          // onPress={this.onPress}
          activeOpacity={0.8}>
          {/* {this.state.loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : ( */}
          <Image source={require('../assets/imgs/ic_google.png')} style={{ marginTop: 2 }} />
          {/* )} */}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button100, { backgroundColor: '#004d99' }]}
          // onPress={this.onPress}
          activeOpacity={0.8}>
          {/* {this.state.loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : ( */}
          <Image source={require('../assets/imgs/ic_fb.png')} style={{ marginTop: 2 }} />
          {/* )} */}
        </TouchableOpacity>


        <TouchableOpacity
          style={[styles.button100, { backgroundColor: '#E0E0E0' }]}
          // onPress={this.onPress}
          activeOpacity={0.8}>
          {/* {this.state.loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : ( */}
          <Image source={require('../assets/imgs/ic_apple.png')} style={{ marginTop: 2 }} />
          {/* )} */}
        </TouchableOpacity>


      </View>
    </ScrollView>
  );
}

export default MyProject;

const styles = StyleSheet.create({
  MainContainer: {
    // flex: 1,
    alignItems: 'center',
    width: '90%',
    // alignContent: 'center',
    alignSelf: 'center',
    // backgroundColor: '#9e1515',
    // height: Dimensions.get('window').height - 30,
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '90%',
    height: 50,
    borderRadius: 50,
    marginTop: 15,
  },
  searchIcon: {
    padding: 20,
  },
  input: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 5,
    borderRadius: 50,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 40,
    marginBottom: 30,
  },
  button: {
    alignItems: 'center',
    // backgroundColor: '#00023A',
    width: 130,
    // height: 60,
    borderRadius: 100,
  },
  button100: {
    alignItems: 'center',
    // backgroundColor: '#d6d6c2',
    width: '90%',
    padding: 10,
    height: 55,
    marginTop: 20,
    borderRadius: 100,
  },
});
