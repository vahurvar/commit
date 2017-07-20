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
    TouchableOpacity,
    AsyncStorage,
    TextInput,
    StatusBar
} from 'react-native';

import LoginForm from "./LoginForm.js"

export default class Login extends Component {

    static navigationOptions = {
        title: 'Login',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#fff' },
        headerTitleStyle: { color: '#fff' }
    }

    componentWillMount() {
        AsyncStorage.getItem('email').then((value) => {
        this.setState({ asyncEmail: value })
    }).done()

    AsyncStorage.getItem('password').then((value) => {
        this.setState({ asyncPassword: value })
    }).done()
    }

    constructor(props) {
        super(props);
        this.state = {
            asyncEmail: '',
            asyncPassword: '',
            email: '',
            password: ''
        }
    }

    login() {
        this.getUser()

        if (this.state.asyncEmail == this.state.email && this.state.asyncPassword == this.state.password) {
            this.props.navigation.navigate('HomePage')
        }
        else {
            alert("The email or password you entered was incorrect.")
        }

    }

    getUser() {

    AsyncStorage.getItem('email').then((value) => {
        this.setState({ asyncEmail: value })
    }).done()

    AsyncStorage.getItem('password').then((value) => {
        this.setState({ asyncPassword: value })
    }).done()

    }

    getUserEmail() {
    }



    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.logoContainer}>

                    <Text style={styles.title}>commit</Text>

                    <Image 
                    style={styles.logo} 
                    source={require('./img/commitlogo.png')}
                    />

                </View>

                <View style={styles.formContainer}>

                    <TextInput 
                    placeholder="Email"
                    placeholderTextColor="#a9a9a9"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={email => this.setState({email})}
                    />

                    <TextInput
                    placeholder="Password..."
                    placeholderTextColor="#a9a9a9"
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={password => this.setState({password})}
                    />

                </View>


                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.login()}>
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
    },

    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#051baa',
        color: '#051baa',
        borderRadius: 10,
        marginBottom: 12,
        width: '80%',
        paddingHorizontal: 10
    },

});

