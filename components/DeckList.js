import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from "react-redux";

class DeckList extends Component {
  render() {
    const {decks} = this.props.decks;
    return (
      <View>
        { decks ?
            decks.map((deck) =>
              <Text key={deck.title}>{deck.title}</Text>
            )
            :
            <Text>No decks available</Text>
        }
      </View>
    );
  }
}

function mapStateToProps({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList);