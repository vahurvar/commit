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
    StatusBar
} from 'react-native';

export default class LoginForm extends Component {

    render() {
        return (
            <View style={styles.container}>

            <StatusBar 
                barStyle="light-content"
            />

                <TextInput 
                placeholder="Username/Email..."
                placeholderTextColor="#ff7978"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input} 
                />

                <TextInput
                placeholder="Password..."
                placeholderTextColor="#ff7978"
                returnKeyType="go"
                ref={(input) => this.passwordInput = input}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
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
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        color: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10
    },

});





