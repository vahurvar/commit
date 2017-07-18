/* @flow */
'use strict';

import React, {
    Component
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';



export default class Home extends Component {

    static navigationOptions = {
        title: 'Home',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#ff7978' },
        headerTitleStyle: { color: '#fff' }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textAndButtonContainer}>
                    <Text style={styles.textAboveButton}>You do not have any oaths, click below to begin!</Text>
                    <TouchableOpacity style={styles.newOathButtonContainer}>
                        <Text style={styles.newOathButtonText}>New Oath</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textAndButtonContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    textAboveButton: {
        color: '#ff7978',
        fontSize: 15,
        width: 200,
        textAlign: 'center'
    },
    newOathButtonContainer: {
        backgroundColor: '#ff7978',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        width: '80%'
    },
    newOathButtonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
    
});




