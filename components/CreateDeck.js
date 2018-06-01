import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
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
    navigation.navigate('Navigator')
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