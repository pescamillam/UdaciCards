import React from 'react';
import DeckList from './DeckList';
import DeckDetail from './DeckDetail';
import {createStackNavigator} from 'react-navigation';

export const ModalNavigator = createStackNavigator(
  {
    DeckList: { screen: DeckList },
    DeckDetail: { screen: DeckDetail }
  }
);