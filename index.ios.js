/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Home from './app/components/Home.js'
import Login from './app/components/Login.js'
import Menu from './app/components/Menu.js'

export default class fitbet extends Component {
  render() {
    return (
    	<Login/>
    	);
  }
}

AppRegistry.registerComponent('fitbet', () => fitbet);