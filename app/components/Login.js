/* @flow */
'use strict';

import React, {
    Component
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView
} from 'react-native';

import LoginForm from './LoginForm.js';

export default class Login extends Component {

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>

                    <Text style={styles.title}>Oath</Text>

                    <Image 
                    style={styles.logo} 
                    source={require('./img/oathlogo.png')} 
                    />

                </View>
                <View style={styles.form}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff7978'
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    logo: {
        height: 125,
        width: 110
    },

    description: {
        color: '#fff',
        marginTop: 10,
        width: 150,
        textAlign: 'center'
    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }

});




