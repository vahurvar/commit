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
    TextInput
} from 'react-native';

export default class Register extends Component {

    static navigationOptions = {
        title: 'Register',
        headerTintColor: '#051baa',
        headerStyle: { backgroundColor: '#fff' },
        headerTitleStyle: { color: '#051baa' },
        headerBottomBorderColor: '#051baa'
    }

    constructor(props) {
        super(props);
        this.state = {
            maleButtonSelected: false,
            femaleButtonSelected: false
        }
    }

    malePressed() {
        if (this.state.maleButtonSelected) {
            this.setState({ maleButtonSelected: false })
        }
        else {
            this.setState({ maleButtonSelected: true })
        }
    }

    femalePressed() {
        if (this.state.femaleButtonSelected) {
            this.setState({ femaleButtonSelected: false })
        }
        else {
            this.setState({ femaleButtonSelected: true })
        }
    }



    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.pageContainer}>

                <TextInput 
                    placeholder="Full Name..."
                    placeholderTextColor="#a9a9a9"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                />

                <TextInput 
                    placeholder="Email..."
                    placeholderTextColor="#a9a9a9"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                />

                <TextInput 
                    placeholder="Username..."
                    placeholderTextColor="#a9a9a9"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                />

                <TextInput 
                    placeholder="Password..."
                    placeholderTextColor="#a9a9a9"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                />

                <TextInput 
                    placeholder="Repeat Password..."
                    placeholderTextColor="#a9a9a9"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                />

                <View style={styles.mOrFContainer}>

                        <TouchableOpacity onPress={() => this.malePressed()} style={this.state.maleButtonSelected ? styles.maleButtonPressed : styles.maleButtonContainer}>
                            <Text onPress={() => this.malePressed()} style={this.state.maleButtonSelected ? styles.maleTextPressed : styles.maleButtonText}>
                            Male
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.femalePressed()} style={this.state.femaleButtonSelected ? styles.femaleButtonPressed : styles.femaleButtonContainer}>
                            <Text onPress={() => this.femalePressed()} style={this.state.femaleButtonSelected ? styles.femaleTextPressed : styles.femaleButtonText}>
                            Female
                            </Text>
                        </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('HomePage')}>
                    <Text style={styles.buttonText}>
                    CREATE ACCOUNT
                    </Text>
                </TouchableOpacity>

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

    pageContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },

    description: {
        color: '#fff',
        marginTop: 10,
        width: 150,
        textAlign: 'center'
    },

    buttonContainer: {
        backgroundColor: '#051baa',
        borderRadius: 10,
        marginBottom: 30,
        marginTop: '40%',
        padding: 15,
        width: '80%'
        
    },

    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#051baa',
        color: '#051baa',
        borderRadius: 10,
        width: '80%',
        marginTop: 20,
        paddingHorizontal: 10
    },
    mOrFContainer: {
        height: 50,
        borderRadius: 10,
        width: '80%',
        backgroundColor: '#fff',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    maleButtonContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#051baa',
        borderRadius: 10,
        padding: 4,
        width: '20%%',
        marginLeft: 75
    },
    maleButtonPressed: {
        backgroundColor: '#051baa',
        borderWidth: 1,
        borderColor: '#051baa',
        borderRadius: 10,
        padding: 4,
        width: '20%%',
        marginLeft: 75
    },
    maleButtonText: {
        color: '#051baa',
        fontSize: 20,
        textAlign: 'center'
    },
    maleTextPressed: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    femaleButtonContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#051baa',
        borderRadius: 10,
        padding: 4,
        width: '25%',
        marginRight: 75
    },
    femaleButtonPressed: {
        backgroundColor: '#051baa',
        borderWidth: 1,
        borderColor: '#051baa',
        borderRadius: 10,
        padding: 4,
        width: '25%',
        marginRight: 75
    },
    femaleButtonText: {
        color: '#051baa',
        fontSize: 20,
        textAlign: 'center'
    },
    femaleTextPressed: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },

});



