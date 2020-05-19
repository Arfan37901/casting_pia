import * as React from 'react';
import {
  View,
  AsyncStorage,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignInScreen from './src/components/login';
// import Terms_Conditions from './src/components/termsConditions';
import Loading from './src/components/test';
import Example from './src/components/test';
import HomePage from './src/components/home';
import ModelsActors from './src/components/modelsActors';
import News from './src/components/news';
import Partners from './src/components/partners';
import Auditions from './src/components/auditions';
import AuditionDetail from './src/components/auditions/detailPage';

import Profile from './src/components/profile';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

const AuthContext = React.createContext();

function SplashScreen() {
  return (
    <View>
      {/* <Text>Loading...</Text> */}
      <Image source={require('./src/assets/imgs/splash.png')}
        style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function StackScreen({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
        // userToken = 1;
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              // component={SignInScreen}
              options={{
                title: 'Sign in',
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            >{props => <SignInScreen {...props} dispatch={dispatch} />}</Stack.Screen>
          ) : (
                // User is signed in
                <Stack.Screen name="Home" component={Tabs} />
              )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomePage}
        options={({ navigation, route }) => ({
          headerRight: props => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                style={[styles.headerIcon, { marginRight: 15 }]}
                source={require('./src/assets/imgs/ic_profile.png')}
              />
            </TouchableOpacity>
          ),
          headerTitle: props => (
            <Image
              style={{ width: 100, resizeMode: 'stretch', alignSelf: 'center' }}
              source={require('./src/assets/imgs/txt_castngpia.png')}
            />
          ),
          headerLeft: props => (
            <Image
              style={[styles.headerIcon, { marginLeft: 15 }]}
              source={require('./src/assets/imgs/ic_casting_pia_without_txt.png')}
            />
          ),
        })}
      />
      <HomeStack.Screen options={{
        title: 'Profile',
        headerStyle: {
          backgroundColor: '#F0F0F0',
        },
      }} name="Profile" component={Profile} />
    </HomeStack.Navigator>
  );
}

const ModelsStack = createStackNavigator();

function ModelsStackScreen() {
  return (
    <ModelsStack.Navigator>
      <ModelsStack.Screen
        name="Home"
        component={ModelsActors}
        options={({ navigation, route }) => ({
          headerRight: props => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                style={[styles.headerIcon, { marginRight: 15 }]}
                source={require('./src/assets/imgs/ic_profile.png')}
              />
            </TouchableOpacity>
          ),
          headerTitle: props => (
            <Image
              style={{ width: 100, resizeMode: 'stretch', alignSelf: 'center' }}
              source={require('./src/assets/imgs/txt_castngpia.png')}
            />
          ),
          headerLeft: props => (
            <Image
              style={[styles.headerIcon, { marginLeft: 15 }]}
              source={require('./src/assets/imgs/ic_casting_pia_without_txt.png')}
            />
          ),
        })}
      />
      <ModelsStack.Screen name="Details" component={DetailsScreen} />
    </ModelsStack.Navigator>
  );
}

const NewsStack = createStackNavigator();

function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        component={News}
        options={({ navigation, route }) => ({
          headerRight: props => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                style={[styles.headerIcon, { marginRight: 15 }]}
                source={require('./src/assets/imgs/ic_profile.png')}
              />
            </TouchableOpacity>
          ),
          headerTitle: props => (
            <Image
              style={{ width: 100, resizeMode: 'stretch', alignSelf: 'center' }}
              source={require('./src/assets/imgs/txt_castngpia.png')}
            />
          ),
          headerLeft: props => (
            <Image
              style={[styles.headerIcon, { marginLeft: 15 }]}
              source={require('./src/assets/imgs/ic_casting_pia_without_txt.png')}
            />
          ),
        })}
      />
      <NewsStack.Screen name="Details" component={DetailsScreen} />
    </NewsStack.Navigator>
  );
}

const AuditionsStack = createStackNavigator();

function AuditionsStackScreen() {
  return (
    <AuditionsStack.Navigator>
      <AuditionsStack.Screen
        name="Auditions"
        component={Auditions}
        options={({ navigation, route }) => ({

          headerRight: props => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                style={[styles.headerIcon, { marginRight: 15 }]}
                source={require('./src/assets/imgs/ic_profile.png')}
              />
            </TouchableOpacity>
          ),
          headerTitle: props => (
            <Image
              style={{ width: 100, resizeMode: 'stretch', alignSelf: 'center' }}
              source={require('./src/assets/imgs/txt_castngpia.png')}
            />
          ),
          headerLeft: props => (
            <Image
              style={[styles.headerIcon, { marginLeft: 15 }]}
              source={require('./src/assets/imgs/ic_casting_pia_without_txt.png')}
            />
          ),
        })}
      />
      <AuditionsStack.Screen name="Audition" component={AuditionDetail} />
    </AuditionsStack.Navigator>
  );
}

const PartnersStack = createStackNavigator();

function PartnersStackScreen() {
  return (
    <PartnersStack.Navigator>
      <PartnersStack.Screen
        name="News"
        component={Partners}
        options={({ navigation, route }) => ({

          headerRight: props => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                style={[styles.headerIcon, { marginRight: 15 }]}
                source={require('./src/assets/imgs/ic_profile.png')}
              />
            </TouchableOpacity>
          ),
          headerTitle: props => (
            <Image
              style={{ width: 100, resizeMode: 'stretch', alignSelf: 'center' }}
              source={require('./src/assets/imgs/txt_castngpia.png')}
            />
          ),
          headerLeft: props => (
            <Image
              style={[styles.headerIcon, { marginLeft: 15 }]}
              source={require('./src/assets/imgs/ic_casting_pia_without_txt.png')}
            />
          ),
        })}
      />
      <PartnersStack.Screen name="Details" component={DetailsScreen} />
    </PartnersStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#8E6EFF',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            // console.log(color);
            if (color !== '#8E6EFF') {
              return (
                <Image
                  style={styles.tabIcon}
                  source={require('./src/assets/imgs/ic_home.png')}
                />
              );
            } else {
              return (
                <Image
                  style={styles.tabIcon}
                  source={require('./src/assets/imgs/ic_home_active.png')}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Auditions"
        component={AuditionsStackScreen}
        options={{
          tabBarLabel: 'Auditions',
          tabBarIcon: ({ color, size }) => {
            if (color !== '#8E6EFF') {
              return (
                <Image
                  style={styles.tabIcon}
                  source={require('./src/assets/imgs/ic_auditions.png')}
                />
              );
            } else {
              return (
                <Image
                  style={styles.tabIcon}
                  source={require('./src/assets/imgs/ic_auditions_active.png')}
                />
              );
            }
          },
        }}
      />

      <Tab.Screen
        name="Models/Actors"
        component={ModelsStackScreen}
        options={{
          tabBarLabel: 'Models/Actors',
          tabBarIcon: ({ color, size }) => {
            if (color !== '#8E6EFF') {
              return (
                <Image
                  style={styles.tabIcon}
                  source={require('./src/assets/imgs/ic_models-actors.png')}
                />
              );
            } else {
              return (
                <Image
                  style={styles.tabIcon}
                  source={require('./src/assets/imgs/ic_models-actors_active.png')}
                />
              );
            }
          },
        }}
      />

      <Tab.Screen
        name="Partners"
        component={PartnersStackScreen}
        options={{
          tabBarLabel: 'Partners',
          tabBarIcon: ({ color, size }) => {
            if (color !== '#8E6EFF') {
              return (
                <Image
                  style={styles.tabIcon}
                  source={require('./src/assets/imgs/ic_partners.png')}
                />
              );
            } else {
              return (
                <Image
                  style={styles.tabIcon}
                  source={require('./src/assets/imgs/ic_partners_active.png')}
                />
              );
            }
          },
        }}
      />

      <Tab.Screen
        name="News"
        component={NewsStackScreen}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => {
            if (color !== '#8E6EFF') {
              return (
                <Image
                  style={styles.tabIcon}
                  source={require('./src/assets/imgs/ic_news.png')}
                />
              );
            } else {
              return (
                <Image
                  style={styles.tabIcon}
                  source={require('./src/assets/imgs/ic_news_active.png')}
                />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 22,
    height: 23,
    marginBottom: -7,
    resizeMode: 'contain',
  },

  headerIcon: {
    width: 22,
    height: 23,
    resizeMode: 'contain',
  },
});
// export default createAppContainer(DrawerNavigatorExample);
