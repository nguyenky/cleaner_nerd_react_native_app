/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Login from './components/auths/Login.js';
import Home from './components/home/Home.js';

const Navigation = StackNavigator({
  Login:{screen:Login},
  Home:{screen:Home},
  },{
    initialRouteName: 'Home',
    headerMode: 'screen'
  }
  // navigationOptions:{ header:{ visible:false }}
);
export default Navigation;
