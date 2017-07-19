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
    Image
} from 'react-native';



export default class Checkin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialPosition: 'unknown',
            latitude: null,
            longitude: null,
        }
    }

    static navigationOptions = {
        title: 'Checkin',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#051baa' },
        headerTitleStyle: { color: '#fff' }
    }

    getPosition() {
        navigator.geolocation.getCurrentPosition(
        (position) => {
            var initialPosition = JSON.stringify(position);
            this.setState({initialPosition});
            this.setState({ latitude: position.coords.latitude });
            this.setState({ longitude: position.coords.longitude });
        },
        (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textAndButtonContainer}>
                    <TouchableOpacity onPress={() => this.getPosition()} style={styles.newOathButtonContainer}>
                        <Text style={styles.newOathButtonText}>Get Location</Text>
                    </TouchableOpacity>
                    <Text>{this.state.initialPosition}</Text>
                    <Text>{this.state.latitude}</Text>
                    <Text>{this.state.longitude}</Text>
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
