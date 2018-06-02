import React, {Component} from  'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';

class DeckDetail extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.deck.title : 'Detail'
    };
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleLabel}>{navigation.state.params.deck.title}</Text>
        <Text>{navigation.state.params.deck.questions.length} cards</Text>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={() =>
            navigation.navigate('AddCard', {deck: navigation.state.params.deck})}>
            <Text style={styles.addText}>Add Card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.startButtonContainer}>
          <TouchableOpacity style={styles.startButton}>
            <Text>Start Quiz</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('DeckList')}>
          <Text>DeckDetail {navigation.state.params.title}</Text>
        </TouchableOpacity>
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

export default connect()(DeckDetail);