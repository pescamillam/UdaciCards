import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";

class DeckList extends Component {
  render() {
    const {decks} = this.props.decks;
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        { decks ?
            decks.map((deck) =>
              <TouchableOpacity key={deck.title} onPress={() =>
                  navigation.navigate('DeckDetail', {title: deck.title})}>
                <Text style={{height: 100}}>{deck.title}</Text>
              </TouchableOpacity>
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