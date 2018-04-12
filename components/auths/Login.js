import React, {Component} from 'react';
import{
  View,
  Text
} from 'react-native';

export default class Login extends Component{
  static navigationOptions = {
    header: null,
    title: 'Welcome to Cleaning nerd !!!',
  };
  render(){
    return(
      <View>
        <Text>Login</Text>
      </View>
    )
  };
}
