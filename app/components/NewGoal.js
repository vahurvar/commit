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
    TextInput,
    TouchableHighlight
} from 'react-native';



export default class NewGoal extends Component {

    static navigationOptions = {
        title: 'New Goal',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#051baa' },
        headerTitleStyle: { color: '#fff' }
    }

    constructor(props) {
        super(props);
        this.state = {
            gymButtonSelected: false,
            runButtonSelected: false
        }
    }

    gymPressed() {
        if (this.state.gymButtonSelected) {
            this.setState({ gymButtonSelected: false })
        }
        else {
            this.setState({ gymButtonSelected: true })
        }
    }

    runPressed() {
        if (this.state.runButtonSelected) {
            this.setState({ runButtonSelected: false })
        }
        else {
            this.setState({ runButtonSelected: true })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formsContainer}>

                    <TextInput 
                    placeholder="Goal Title..."
                    placeholderTextColor="#a9a9a9"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                    />

                    <View style={styles.gymOrRunContainer}>

                        <TouchableOpacity onPress={() => this.gymPressed()} style={this.state.gymButtonSelected ? styles.gymButtonPressed : styles.gymButtonContainer}>
                            <Text onPress={() => this.gymPressed()} style={this.state.gymButtonSelected ? styles.gymTextPressed : styles.gymButtonText}>
                            Gym
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.runPressed()} style={this.state.runButtonSelected ? styles.runButtonPressed : styles.runButtonContainer}>
                            <Text onPress={() => this.runPressed()} style={this.state.runButtonSelected ? styles.runTextPressed : styles.runButtonText}>
                            Run
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <TextInput 
                    placeholder="Gym/Run Goal..."
                    placeholderTextColor="#a9a9a9"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                    />

                    <TextInput 
                    placeholder="Start Date..."
                    placeholderTextColor="#a9a9a9"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                    />

                    <TextInput 
                    placeholder="End Date..."
                    placeholderTextColor="#a9a9a9"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                    />

                    <TouchableOpacity style={styles.addNewGoalButton} onPress={() => this.props.navigation.navigate('HomePage')}>
                        <Text style={styles.addNewGoalText}>Add New Goal</Text>
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
    formsContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-start'
    },
    textAboveButton: {
        color: '#051baa',
        fontSize: 15,
        width: 200,
        textAlign: 'center'
    },
    gymButtonContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#051baa',
        borderRadius: 10,
        padding: 4,
        width: '20%%',
        marginLeft: 80
    },
    gymButtonPressed: {
        backgroundColor: '#051baa',
        borderWidth: 1,
        borderColor: '#051baa',
        borderRadius: 10,
        padding: 4,
        width: '20%%',
        marginLeft: 80
    },
    gymButtonText: {
        color: '#051baa',
        fontSize: 20,
        textAlign: 'center'
    },
    gymTextPressed: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    runButtonContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#051baa',
        borderRadius: 10,
        padding: 4,
        width: '20%%',
        marginRight: 80
    },
    runButtonPressed: {
        backgroundColor: '#051baa',
        borderWidth: 1,
        borderColor: '#051baa',
        borderRadius: 10,
        padding: 4,
        width: '20%%',
        marginRight: 80
    },
    runButtonText: {
        color: '#051baa',
        fontSize: 20,
        textAlign: 'center'
    },
    runTextPressed: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    input: {
        height: 40,
        width: '80%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#051baa',
        color: '#051baa',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 25
    },
    gymOrRunContainer: {
        height: 50,
        borderRadius: 10,
        width: '80%',
        backgroundColor: '#fff',
        borderColor: '#051baa',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    addNewGoalButton: {
        backgroundColor: '#051baa',
        borderRadius: 10,
        padding: 10,
        marginTop: '50%',
        width: '80%'
    },
    addNewGoalText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }

    
});