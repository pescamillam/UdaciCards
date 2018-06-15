import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';

class QuestionCard extends Component {

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      title: params.deck.title
    };
  };

  render() {
    debugger
    const {navigation, decks} = this.props;
    const deck = decks.decks.filter((deck) => deck.title === navigation.state.params.deck.title)[0];
    const currentQuestion = navigation.state.params.currentQuestion;
    return (
      <View style={styles.container}>
        <Text>{currentQuestion+1}/{deck.questions.length}</Text>
        <Text>{deck.questions[currentQuestion].question}</Text>
        <Text>{deck.questions[currentQuestion].answer}</Text>
        <TouchableOpacity>
          <Text>Answer</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Text>Correct</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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