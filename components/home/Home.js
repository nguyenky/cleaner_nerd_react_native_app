import React, {Component} from 'react';
import{
  View,
  Text,
  Button,
  Image
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
        <View>
           <Image
                   style={{width: 100, height: 100}}
                   source={{url:'https://s3.envato.com/files/243549096/Clock%20Background%2001_preview1.JPG'}}
           />
        </View>
      </View>
    )
  };
}
