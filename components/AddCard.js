import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {addCardAction} from "../actions";

class AddCard extends Component {

  state = {
    question: '',
    answer: ''
  };

  static navigationOptions = {
    title: 'Add card'
  };

  handleQuestion = (text) => {
    this.setState({question: text});
  };

  handleAnswer = (text) => {
    this.setState({answer: text})
  };

  addCard = () => {
    var {navigation} = this.props;
    this.props.addCard({
      deck: {
        title: this.props.navigation.state.params.deck.title
      },
      question: {
        question: this.state.question,
        answer: this.state.answer
      }
    });
    navigation.navigate('DeckDetail', {deck: this.props.navigation.state.params.deck});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder={'question'} style={styles.textInput} onChangeText={this.handleQuestion}/>
        <TextInput placeholder={'answer'} style={styles.textInput} onChangeText={this.handleAnswer}/>
        <TouchableOpacity
          onPress = {
            () => this.addCard(this.state.title)
          }>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: 100
  }
});

function mapStateToProps ({}) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addCard: (data) => dispatch(addCardAction(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddCard);