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
        headerTintColor: '#ff7978',
        headerStyle: { backgroundColor: '#ff7978' },
        headerTitleStyle: { color: '#ff7978' }
    }



    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>

                    <Text style={styles.title}>Commit</Text>

                    <Image 
                    style={styles.logo} 
                    source={require('./img/oathlogo.png')}
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
        backgroundColor: '#ff7978'
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
        height: 125,
        width: 110
    },

    noAccountText: {
        color: '#fff',
        width: 320,
        textAlign: 'center',
        opacity: 0.8
    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },

    buttonContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        padding: 15,
        marginLeft: 40,
        marginRight: 40
    },

    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ff7978'
    }
});

