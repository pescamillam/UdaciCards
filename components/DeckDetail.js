import React, {Component} from  'react'
import {Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux'

class DeckDetail extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('DeckList')}>
          <Text>DeckDetail {navigation.state.params.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(DeckDetail);