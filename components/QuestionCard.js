import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class QuestionCard extends Component {

  state = {
    isQuestion: true
  }

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      title: params.deck.title
    };
  };

  markAsRight = (data) => {
    this.setState(state => ({
        isQuestion: true
      }));
    const {navigation, decks} = this.props;
    const deck = decks.decks.filter((deck) => deck.title === navigation.state.params.deck.title)[0];
    if (navigation.state.params.currentQuestion + 1 < deck.questions.length) {
      navigation.navigate('QuestionCard', {
          deck, currentQuestion: navigation.state.params.currentQuestion + 1,
          rightAnswers: navigation.state.params.rightAnswers + 1})
    } else {
      clearLocalNotification()
          .then(setLocalNotification)
      navigation.navigate('Result', {
          deck, rightAnswers: navigation.state.params.rightAnswers + 1
      })
    }

  }

  markAsWrong = (data) => {
    this.setState(state => ({
        isQuestion: true
      }));
    const {navigation, decks} = this.props;
    const deck = decks.decks.filter((deck) => deck.title === navigation.state.params.deck.title)[0];
    if (navigation.state.params.currentQuestion + 1 < deck.questions.length) {
      navigation.navigate('QuestionCard', {
          deck, currentQuestion: navigation.state.params.currentQuestion + 1,
          rightAnswers: navigation.state.params.rightAnswers});
    } else {
      clearLocalNotification()
          .then(setLocalNotification)
      navigation.navigate('Result', {
          deck, rightAnswers: navigation.state.params.rightAnswers
      })
    }
  }

  render() {
    const {navigation, decks} = this.props;
    const deck = decks.decks.filter((deck) => deck.title === navigation.state.params.deck.title)[0];
    const currentQuestion = navigation.state.params.currentQuestion;
    return (
      <View style={styles.container}>
        <Text>{currentQuestion+1}/{deck.questions.length}</Text>
        { this.state.isQuestion ?
        <Text style={styles.questionText}>{deck.questions[currentQuestion].question}</Text>
        :
        <Text style={styles.answerText}>{deck.questions[currentQuestion].answer}</Text>
        }
        <TouchableOpacity onPress={() =>
            {
              this.setState(state => ({
                isQuestion: !state.isQuestion
              }));
            } }>
          { this.state.isQuestion ?
            <Text style={styles.switchText}>Answer</Text>
          :
            <Text style={styles.switchText}>Question</Text>
          }
        </TouchableOpacity>
        <View style={styles.correctButtonContainer}>
          <TouchableOpacity style={styles.correctButton} onPress={() => this.markAsRight()}>
            <Text>Correct</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.incorrectButtonContainer}>
          <TouchableOpacity style={styles.incorrectButton} onPress={() => this.markAsWrong()}>
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  switchText: {
    color: 'red'
  },
  questionText: {
    fontSize: 20
  },
  answerText: {
    fontSize: 20
  },
  correctButtonContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  correctButton: {
    borderRadius: 4,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    backgroundColor: 'green'
  },
  incorrectButtonContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  incorrectButton: {
    borderRadius: 4,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    backgroundColor: 'red'
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

function mapDispatchToProps() {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);