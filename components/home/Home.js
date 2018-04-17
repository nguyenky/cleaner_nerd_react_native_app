import React, {Component} from 'react';
import{
  View,
  Text,
  Button,
  Image,
  AsyncStorage,
} from 'react-native';

export default class Home extends Component{
  static navigationOptions = {
    header:null,
    title: 'Welcome to Cleaning nerd !!!',
  };
  constructor(props) {
    super(props);
    this.getStorage();
  }
  getStorage = async()=>{
    try {
      const value = await AsyncStorage.getItem('@email:key');
      if (value !== null){
      }else{
        this.props.navigation.push('Login');
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  logout(){
    AsyncStorage.removeItem('@email:key');
    this.props.navigation.push('Login');
  }
  render(){
    var {navigate} = this.props.navigation;
    return(
      <View>
        <Text>Home Page</Text>
        <Button
          onPress={()=>this.logout()}
          title = "Logout"
        />
      </View>
    )
  };
}
