import React, {Component} from 'react';
import DeckList from './DeckList';
import DeckDetail from './DeckDetail';
import {createStackNavigator} from 'react-navigation';
import {connect} from 'react-redux';

const ModalNavigator = createStackNavigator(
  {
    DeckList: { screen: DeckList },
    DeckDetail: { screen: DeckDetail }
  }
);

class Navigator extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ModalNavigator navigation={navigation}/>
    )
  }
}

export default connect()(Navigator);