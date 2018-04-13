import React, {Component} from 'react';
import{
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
const remote = 'https://s3.envato.com/files/243549096/Clock%20Background%2001_preview1.JPG';
export default class Login extends Component{
  static navigationOptions = {
    header: null,
    title: 'Welcome to Cleaning nerd !!!',
  };
  render(){
    const resizeMode = 'center';
    const text = 'This is some text inlaid in an image';
    return(
      <View style={styles.container}>
         <View style={styles.loginContainer}>
            <Image
                  resizeMode="contain"
                   source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                   style={styles.logo} />
         </View>
        <View style={styles.formContainer}>
          <Text>form</Text>
        </View>
       </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#2c3e50',
  },
  loginContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
  },
  logo: {
      position: 'absolute',
      width: 300,
      height: 100
  }
});
