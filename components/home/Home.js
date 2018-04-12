import React, {Component} from 'react';
import{
  View,
  Text,
  Button
} from 'react-native';

export default class Home extends Component{
  static navigationOptions = {
    title: 'Welcome to Cleaning nerd !!!',
  };
  render(){
    var {navigate} = this.props.navigation;
    return(
      <View>
        <Text>Home Page</Text>
        <Button
          onPress={()=>navigate("Login",{
            ho:'Le',
            name:'nguyen ky',
          })}
          title = "Login"
        />
      </View>
    )
  };
}
