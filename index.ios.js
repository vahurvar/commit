import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './app/components/Home.js'
import Login from './app/components/Login.js'
import NewGoal from './app/components/NewGoal.js'
import Register from './app/components/Register.js'
import Checkin from './app/components/Checkin.js'

const App = StackNavigator({
	LoginPage: {
    screen: Login,
  },
	HomePage: {
    screen: Home,
  },
  	NewGoalPage: {
  		screen: NewGoal,
  	},
  	RegisterPage: {
  		screen: Register,
  	},
  	CheckinPage: {
  		screen: Checkin,
  	}
});

export default class commit extends Component {
  render() {
    return (
    	<App/>
    	);
  }
}

AppRegistry.registerComponent('commit', () => commit);