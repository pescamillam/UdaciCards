import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";

class AddCard extends Component {

  static navigationOptions = {
    title: 'Add card'
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput>Question</TextInput>
        <TextInput>Answer</TextInput>
        <TouchableOpacity>
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
  }
});

export default connect()(AddCard);