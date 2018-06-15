import React from 'react';
import DeckList from './DeckList';
import DeckDetail from './DeckDetail';
import AddCard from './AddCard';
import Result from "./Result";
import {createStackNavigator} from 'react-navigation';
import QuestionCard from "./QuestionCard";

export const ModalNavigator = createStackNavigator(
  {
    DeckList: { screen: DeckList },
    DeckDetail: { screen: DeckDetail },
    AddCard: { screen: AddCard },
    QuestionCard: { screen: QuestionCard },
    Result: { screen: Result }
  }
);