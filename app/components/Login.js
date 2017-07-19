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
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';

import LoginForm from "./LoginForm.js"

export default class Login extends Component {

    static navigationOptions = {
        title: 'Login',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#fff' },
        headerTitleStyle: { color: '#fff' }
    }



    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>

                    <Text style={styles.title}>commit</Text>

                    <Image 
                    style={styles.logo} 
                    source={require('./img/commitlogo.png')}
                    />

                </View>
                <View style={styles.form}>
                    <LoginForm />
                </View>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('HomePage')}>
                    <Text style={styles.buttonText}>
                    LOGIN
                    </Text>
                </TouchableOpacity>


                <View style={styles.noAccountContainer}>
                    <Text style={styles.noAccountText} onPress={() => this.props.navigation.navigate('RegisterPage')}>Don't have an account? Click here to make one!</Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    noAccountContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 5,
    },

    logo: {
        height: 128,
        width: 128
    },

    noAccountText: {
        color: '#a9a9a9',
        width: 320,
        textAlign: 'center',
        opacity: 0.8
    },

    title: {
        fontSize: 50,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#a9a9a9',
        textAlign: 'center'
    },

    buttonContainer: {
        backgroundColor: '#051baa',
        borderRadius: 10,
        marginBottom: 10,
        padding: 15,
        marginLeft: 40,
        marginRight: 40
    },

    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    }
});

