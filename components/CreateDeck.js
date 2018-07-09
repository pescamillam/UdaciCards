import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';
import {createDeckAction} from "../actions";

class CreateDeck extends Component {

  state = {
    title: ''
  };

  handleTitle = (text) => {
    this.setState({title: text});
  };

  create = (title) => {
    const {navigation} = this.props;
    this.props.createDeck(title);
    alert(' Deck ' + title + ' created');
    navigation.navigate('DeckDetail', {deck: {title: title, questions: []}});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <TextInput onChangeText={this.handleTitle} style={styles.textInput}
          placeholder={'Deck Title'}/>
        <TouchableOpacity
          onPress = {
            () => this.create(this.state.title)
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
    width: 200
  }
});

function mapStateToProps ({}) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createDeck: (data) => dispatch(createDeckAction(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDeck);