import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';

class CreateDeck extends Component {

  state = {
    title: ''
  };

  handleTitle = (text) => {
    this.setState({title: text});
  };

  create = (title) => {
    alert(' title: ' + title)
  };

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput onChangeText={this.handleTitle}>Deck Title</TextInput>
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

export default connect()(CreateDeck);