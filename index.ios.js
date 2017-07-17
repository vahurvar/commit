/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Dashboard from './app/components/dashboard'

export default class fitbet extends Component {
  render() {
    return (
    	<Dashboard/>
    	);
  }
}

AppRegistry.registerComponent('fitbet', () => fitbet);