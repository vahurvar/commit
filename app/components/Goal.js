/* @flow */
'use strict';

import React, {
    Component
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';



export default class Home extends Component {


    render() {
        return (
                <TouchableOpacity style={styles.goalCard}>
                    <View style={styles.leftTextContainer}>
                        <View style={styles.leftTopTextContainer}>
                            <Text style={styles.goalTitleText}>{this.state.goalTitle}</Text>
                        </View>

                        <View style={styles.leftMiddleTextContainer}>
                            <Text style={styles.countdownText}>{this.state.goalPeriod} days left</Text>
                        </View>

                        <View style={styles.leftBottomTextContainer}>
                            <Text style={styles.checkinsLeftText}>{this.state.numOfCheckins} check-ins remaining!</Text>
                        </View>
                    </View>

                    <View style={styles.rightTextContainer}>
                        <Text style={styles.moneyText}>$40</Text>
                    </View>
                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    goalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    goalCard: {
        width: '90%',
        height: 80,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#a9a9a9',
        shadowOffset: { width: 0, height: 1.5 },
        shadowOpacity: 1,
        shadowRadius: 2,
        flexDirection: 'row'
    },
    leftTextContainer: {
        width: '60%',
        height: 80,
        flexDirection: 'column',
    },
    leftTopTextContainer: {
        width: '100%',
        height: 25,
        justifyContent: 'center'
    },
    leftMiddleTextContainer: {
        width: '100%',
        height: 30,
        justifyContent: 'center'
    },
    leftBottomTextContainer: {
        width: '100%',
        height: 25,
        justifyContent: 'center'
    },
    rightTextContainer: {
        width: '40%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    goalTitleText: {
        fontSize: 14,
        color: '#a9a9a9',
        fontWeight: 'bold',
        marginLeft: 8
    },
    countdownText: {
        fontSize: 25,
        color: '#051baa',
        fontWeight: 'bold',
        marginLeft: 8,
    },
    moneyText: {
        fontSize: 60,
        color: '#a9a9a9',
        fontWeight: 'bold',
    },
    checkinsLeftText: {
        fontSize: 14,
        color: '#a9a9a9',
        fontWeight: 'bold',
        marginLeft: 8,
    },

});