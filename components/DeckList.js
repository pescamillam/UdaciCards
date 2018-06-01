import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";

class DeckList extends Component {
  render() {
    const {decks} = this.props.decks;
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        { decks ?
            decks.map((deck) =>
              <TouchableOpacity style={styles.deck} key={deck.title} onPress={() =>
                  navigation.navigate('DeckDetail', {deck: deck})}>
                <Text style={styles.deckTitleLabel}>{deck.title}</Text>
                <Text style={styles.deckCardsLabel}>{deck.questions.length} cards</Text>
              </TouchableOpacity>
            )
            :
            <Text>No decks available</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    borderWidth: 0.5,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckTitleLabel: {
    fontSize: 20
  },
  deckCardsLabel: {
    color: 'grey'
  }
});

function mapStateToProps({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList);