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
    AsyncStorage,
    StatusBar
} from 'react-native';

import Goal from './Goal.js'



export default class Home extends Component {

    static navigationOptions = {
        title: 'Home',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#051baa' },
        headerTitleStyle: { color: '#fff' }
    }

    constructor(props) {
        super(props);
        this.state = {
            isGoals: false,
            goalTitle: '',
            startDate: '',
            numOfCheckins: null,
            goalPeriod: null,
            goalTitle2: '',
            startDate2: '',
            numOfCheckins2: null,
            goalPeriod2: null
        }
    }

    componentWillMount() {
        AsyncStorage.getItem("goals")
            .then(value => {
                if(value == null) {
                    this.setState({isGoals: false})
                }
                else {
                    this.setState({isGoals:true})
                }
            })

            this.setGoalStates()
            this.setGoalStates2()

    }

    setGoalStates() {

        AsyncStorage.getItem("goals")
                    .then(value => {
                        var goalObject = JSON.parse(value)
                        var i = 0
                        

                        this.setState({ goalTitle : goalObject[i].title})
                        this.setState({ startDate : goalObject[i].startDay})
                        this.setState({ numOfCheckins : goalObject[i].numberOfCommits})
                        this.setState({ goalPeriod : goalObject[i].period})
    

                    });

    }

    setGoalStates2() {

        AsyncStorage.getItem("goals")
                    .then(value => {
                        var goalObject = JSON.parse(value)
                        var i = 1
                        

                        this.setState({ goalTitle2 : goalObject[i].title})
                        this.setState({ startDate2 : goalObject[i].startDay})
                        this.setState({ numOfCheckins2 : goalObject[i].numberOfCommits})
                        this.setState({ goalPeriod2 : goalObject[i].period})
    

                    });

    }



    render() {

        const areGoals = this.state.isGoals;

        let view = null;

        var goals = [];



        if (areGoals) {



            view = <View style={styles.goalContainer}>

                    <TouchableOpacity style={styles.goalCard} onPress={() => this.props.navigation.navigate('CheckinPage')}>
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
                            <Text style={styles.moneyText}>$5</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.goalCard} onPress={() => this.props.navigation.navigate('CheckinPage')}>
                        <View style={styles.leftTextContainer}>
                            <View style={styles.leftTopTextContainer}>
                                <Text style={styles.goalTitleText}>{this.state.goalTitle2}</Text>
                            </View>

                            <View style={styles.leftMiddleTextContainer}>
                                <Text style={styles.countdownText}>{this.state.goalPeriod2} days left</Text>
                            </View>

                            <View style={styles.leftBottomTextContainer}>
                                <Text style={styles.checkinsLeftText}>{this.state.numOfCheckins2} check-ins remaining!</Text>
                            </View>
                        </View>

                        <View style={styles.rightTextContainer}>
                            <Text style={styles.moneyText}>$40</Text>
                        </View>
                    </TouchableOpacity>

                   </View>

        }


        else {

            view = <View style={styles.textAndButtonContainer}>
                        <Text style={styles.textAboveButton}>You do not have any goals, click below to begin!</Text>

                        <TouchableOpacity style={styles.newOathButtonContainer} onPress={() => this.props.navigation.navigate('NewGoalPage')}>
                            <Text style={styles.newOathButtonText}>New Goal</Text>
                        </TouchableOpacity>


                    </View>

        }


        return (
            <View style={styles.container}>
            <StatusBar barStyle="light-content" />
                {view}
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
    },







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
        flexDirection: 'row',
        marginTop: 20
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




