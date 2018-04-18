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
import Products from './components/home/Products.js';
import TabBar from './components/home/TabBar.js';

const Navigation = StackNavigator({
  Login:{screen:Login},
  Home:{screen:Home},
  TabBar:{screen:TabBar},
  Products:{screen:Products},
  },{
    initialRouteName: 'TabBar',
    headerMode: 'screen'
  }
);
export default Navigation;
