import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';

class Result extends Component {

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    return {

    };
  };

  render() {
    const {navigation, decks} = this.props;
    const deck = decks.decks.filter((deck) => deck.title === navigation.state.params.deck.title)[0];
    const rightAnswers = navigation.state.params.rightAnswers;
    return (
      <View style={styles.container}>
        <Text>Score {rightAnswers} question right of {deck.questions.length} questions</Text>
        <Text>{(rightAnswers/deck.questions.length)*100}%</Text>
        <View style={styles.retryButtonContainer}>
          <TouchableOpacity style={styles.retryButton} onPress={() =>
              navigation.navigate('QuestionCard', {deck, currentQuestion: 0, rightAnswers: 0})}>
            <Text>Retry</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.deckListButtonContainer}>
          <TouchableOpacity style={styles.deckListButton} onPress={() =>
              navigation.navigate('DeckList')}>
            <Text style={styles.deckListText}>Deck List</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  retryButtonContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  retryButton: {
    borderRadius: 4,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    backgroundColor: 'green'
  },
  deckListButtonContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  deckListButton: {
    borderRadius: 4,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    backgroundColor: 'blue'
  },
  deckListText: {
    color: 'white'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function mapStateToProps ({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Result);