import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';
import {addCardAction} from "../actions";

class DeckDetail extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.deck.title : 'Detail'
    };
  };

  render() {
    const {navigation, decks} = this.props;
    const deck = decks.decks.filter((deck) => deck.title === navigation.state.params.deck.title)[0];
    return (
      <View style={styles.container}>
        <Text style={styles.titleLabel}>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={() =>
            navigation.navigate('AddCard', {deck})}>
            <Text style={styles.addText}>Add Card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.startButtonContainer}>
          <TouchableOpacity style={styles.startButton} onPress={() =>
            navigation.navigate('QuestionCard', {deck, currentQuestion: 0, rightAnswers: 0})}>
            <Text>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLabel: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  addButton: {
    borderRadius: 4,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    backgroundColor: 'green'
  },
  addText: {
    color: 'white'
  },
  startButtonContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  startButton: {
    borderRadius: 4,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
  }
});

function mapStateToProps ({decks}) {
  return {
    decks
  }
}

function mapDispatchToProps () {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);