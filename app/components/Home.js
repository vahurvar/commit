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

    static navigationOptions = {
        title: 'Home',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#051baa' },
        headerTitleStyle: { color: '#fff' }
    }

    componentDidMount() {
        AsyncStorage.getItem("goals")
            .then(value => {
                console.log(value)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textAndButtonContainer}>
                    <Text style={styles.textAboveButton}>You do not have any oaths, click below to begin!</Text>

                    <TouchableOpacity style={styles.newOathButtonContainer} onPress={() => this.props.navigation.navigate('NewGoalPage')}>
                        <Text style={styles.newOathButtonText}>New Oath</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.newOathButtonContainer} onPress={() => this.props.navigation.navigate('CheckinPage')}>
                        <Text style={styles.newOathButtonText}>Check-in</Text>
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
    logo: {
        width: 32,
        height: 32
    },
    textAndButtonContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    textAboveButton: {
        color: '#a9a9a9',
        fontSize: 15,
        width: 200,
        textAlign: 'center'
    },
    newOathButtonContainer: {
        backgroundColor: '#051baa',
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




