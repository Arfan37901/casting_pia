  import { BASE_URL } from './constants';
import { AsyncStorage, NetInfo } from 'react-native';

const RestServices = {
  getToken: async () => {
    let token = await AsyncStorage.getItem('token');
    return token;
  },

  logIn: (email, password) => {

    console.log(email, password);
    // const http = new XMLHttpRequest();
    // http.open('POST', `${BASE_URL}/api/login`, false);
    // http.setRequestHeader(
    //   'Content-type',
    //   'application/x-www-form-urlencoded',
    // );

    // http.onreadystatechange = function () {
    //   console.log(http);

    //   if (http.readyState == 4 && http.status == 200) {
    //     const response = JSON.parse(http.responseText);
    //     console.log(response, 'response is the 00000000000');
    //     if (response.type === 'success') {
    //       // AsyncStorage.setItem({ utoken: response.utoken });
    //     }
    //     // return response;
    //   }
    // };

    // const DataObj = new FormData(email, password);

    // http.send(DataObj);

    
    // } else {
    //   alert('1')
    // }
  },
};

export default RestServices;
