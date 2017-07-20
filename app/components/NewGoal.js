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
    Slider,
    DatePickerIOS,
    AsyncStorage
} from 'react-native';

import {NumberPicker} from 'react-native-numberpicker';

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
            title: '',
            numberOfCommits: null,
            period: null
        }
    }

    addNewGoal() {
        AsyncStorage.getItem("goals").then(goalList => {
            goalList = (goalList === null) ? [] : JSON.parse(goalList)
            let id = goalList.length + 1
            goalList.push(this.getNewGoalObjectFromState(id))
            AsyncStorage.setItem("goals", JSON.stringify(goalList))
                .then(() => this.props.navigation.navigate('HomePage'))
        })
    }

    getNewGoalObjectFromState(id) {
        return  {
            goalId: id,
            title: this.state.title,
            startDay: new Date(),
            numberOfCommits: this.state.numberOfCommits,
            period: this.state.period
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formsContainer}>

                    <Text style={styles.textAboveButton}>Goal title</Text>
                    <TextInput
                    placeholderTextColor="#a9a9a9"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={title => this.setState({title})}
                    />

                    <Text style={styles.textAboveButton}>How long is your goal? (in days)</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={1}
                        maximumValue={90}
                        step={1}
                        value={this.state.period}
                        onValueChange={period => this.setState({period})}
                    />
                    <Text style={styles.sliderText}>{this.state.period}</Text>

                    <Text style={styles.textAboveButton}>How many days would you like to go to the gym in that period?</Text>
                    <Slider
                        style={{ width: 300 }}
                        minimumValue={10}
                        maximumValue={this.state.period}
                        step={1}
                        value={this.state.numberOfCommits}
                        onValueChange={numberOfCommits => this.setState({numberOfCommits})}
                    />
                    <Text style={styles.sliderText}>{this.state.numberOfCommits}</Text>

                    <TouchableOpacity style={styles.addNewGoalButton} onPress={() => this.addNewGoal()}>
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
        marginTop: 25,
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
        marginBottom: 20,
        marginTop: 10
    },
    addNewGoalButton: {
        backgroundColor: '#051baa',
        borderRadius: 10,
        padding: 10,
        marginTop: '35%',
        width: '80%'
    },
    addNewGoalText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    slider: {
        width: 300,
    },
    sliderText: {
        color: '#051baa',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    }


});




