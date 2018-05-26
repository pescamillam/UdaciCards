import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {ModalNavigator} from './Navigator';
import CreateDeck from './CreateDeck';
import {connect} from 'react-redux';

const OuterNavigator = createBottomTabNavigator(
  {
    Navigator: { screen: ModalNavigator },
    CreateDeck: { screen: CreateDeck }
  }
);

class TabNavigator extends Component {
  render() {
    return (
      <OuterNavigator/>
    );
  }
}

export default connect()(TabNavigator)