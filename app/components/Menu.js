/* @flow */
'use strict';

import React, {
    Component
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button,
    StatusBar
} from 'react-native';

export default class Menu extends Component {

    render() {
        return (
            <View style={styles.header}>
                <StatusBar 
                    barStyle="dark-content"
                />
                <Text style={styles.title}>
                Wager
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        borderBottomWidth: 1,
        borderColor: '#ff7978',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    title: {
        color: '#ff7978',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 15
    },
});



