import React, {Component} from "react";
import {View} from "react-native";
import {connect} from 'react-redux';
import {Constants} from 'expo';
import AppStatusBar from './AppStatusBar';
import DeckList from './DeckList';

class DeckApp extends Component {
  render() {
    return (
      <View>
        <View style={{height: Constants.statusBarHeight}}>
          <AppStatusBar/>
        </View>
        <DeckList/>
      </View>
    )
  }
}

export default connect()(DeckApp);