/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import Home from './app/components/Home.js'
import Login from './app/components/Login.js'
import Menu from './app/components/Menu.js'
import NewGoal from './app/components/NewGoal.js'
import Register from './app/components/Register.js'

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