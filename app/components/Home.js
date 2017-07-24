/* @flow */
'use strict';

import React, {Component} from 'react';

import {AsyncStorage, StatusBar, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

export default class Home extends Component {

    static navigationOptions = {
        title: 'Home',
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#051baa'},
        headerTitleStyle: {color: '#fff'},
    };

    constructor(props) {
        super(props);
        this.state = {
            hasGoals: false,
            goals: []
        }
    }

    componentWillMount() {
        AsyncStorage.getItem("goals")
            .then(value => {
                if (value === null) {
                    this.setState({hasGoals: false});
                } else {
                    this.setState({hasGoals: true});
                    this.parseAndSetGoals(value);
                }
            })
    }

    parseAndSetGoals(value) {
        AsyncStorage.getItem("goals")
            .then(value => {
                var goalObject = JSON.parse(value);
                console.log("JSON: " + JSON.stringify(goalObject));
                var i = 0;
                this.setState({goalTitle: goalObject[i].title});
                this.setState({startDate: goalObject[i].startDay});
                this.setState({numOfCheckins: goalObject[i].numberOfCommits});
                this.setState({goalPeriod: goalObject[i].period});
                this.setState({goalMoney: goalObject[i].money})
            });



        let goals = [];
        let goalObject = JSON.parse(value);
        for (let goal of goalObject) {
            console.log("Mardo")
            console.log(goal)
            goals.push(goal);
        }
        console.log("All goasl")
        console.log(goals)
        this.setState({goals: goals})

    }

    getGoalCard(goal) {
        console.log("Goals")
        console.log(goal)
        return (<TouchableOpacity
            key= {goal.goalId}
            style={styles.goalCard}
            onPress={() => this.props.navigation.navigate('CheckinPage')}>

            <View style={styles.leftTextContainer}>
                <View style={styles.leftTopTextContainer}>
                    <Text style={styles.goalTitleText}>{goal.title}</Text>
                </View>

                <View style={styles.leftMiddleTextContainer}>
                    <Text style={styles.countdownText}>10 days left</Text>
                </View>

                <View style={styles.leftBottomTextContainer}>
                    <Text style={styles.checkinsLeftText}>10 check-ins
                        remaining!</Text>
                </View>
            </View>

            <View style={styles.rightTextContainer}>
                <Text style={styles.moneyText}>${goal.money}</Text>
            </View>
        </TouchableOpacity>)
    }

    getGoalCards() {
        let goalCards = [];
        for (let goal of this.state.goals) {
            goalCards.push(this.getGoalCard(goal));
        }
        return goalCards;
    }

    render() {
        let goalCards = this.getGoalCards();

        let view = null;
        let view2 = null;
        //TODO: Refactor this method starting from here
        if (this.state.hasGoals) {
            view =
                <View style={styles.goalContainer}>
                    {goalCards}
                    <TouchableOpacity style={styles.newGoalContainer}
                                      onPress={() => this.props.navigation.navigate('NewGoalPage')}>
                        <Text style={styles.newGoalText}>New Goal</Text>
                    </TouchableOpacity>
                </View>
        } else {
            view2 = <View style={styles.textAndButtonContainer}>
                <Text style={styles.textAboveButton}>You do not have any goals, click below to begin!</Text>

                <TouchableOpacity style={styles.newOathButtonContainer}
                                  onPress={() => this.props.navigation.navigate('NewGoalPage')}>
                    <Text style={styles.newOathButtonText}>New Goal</Text>
                </TouchableOpacity>


            </View>

        }
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                {view}
                {view2}
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
        shadowOffset: {width: 0, height: 1},
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
        color: '#85bb65',
        fontWeight: 'bold',
    },
    checkinsLeftText: {
        fontSize: 14,
        color: '#a9a9a9',
        fontWeight: 'bold',
        marginLeft: 8,
    },
    newGoalContainer: {
        backgroundColor: '#051baa',
        borderRadius: 10,
        padding: 10,
        marginTop: 30,
        width: '80%'
    },
    newGoalText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
});



