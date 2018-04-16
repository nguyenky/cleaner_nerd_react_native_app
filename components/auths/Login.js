import React, {Component} from 'react';
import{
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  Alert,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import Wallpaper from './Wallpaper';
import Logo from './Logo';
export default class Login extends Component{
  static navigationOptions = {
    header: null,
    title: 'Welcome to Cleaning nerd !!!',
  };
  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
  login(){

    // this.props.navigation.push('Home');
  }
  render(){
    var {navigate} = this.props.navigation;
    return(
      <ImageBackground
          source={{uri: 'https://raw.githubusercontent.com/dwicao/react-native-login-screen/master/src/images/wallpaper.png'}}
          style={styles.picture}>
          {this.props.childen}
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Email"
                  keyboardType="email-address"
                  underlineColorAndroid='transparent'
                  onChangeText={(email) => this.setState({email})}/>
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  onChangeText={(password) => this.setState({password})}/>
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.login()}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
                <Text>Forgot your password?</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
                <Text>Register</Text>
            </TouchableHighlight>
          </View>
      </ImageBackground >
    )
  };
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0095ff00',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
