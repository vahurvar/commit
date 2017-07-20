/* @flow */
'use strict';

import React, {
    Component
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    StatusBar,
} from 'react-native';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>

            <StatusBar 
                barStyle="light-content"
            />

                <TextInput 
                placeholder="Username/Email..."
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 40,
        paddingBottom: 10
    },

    input: {
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#051baa',
        color: '#051baa',
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 10
    },

});





