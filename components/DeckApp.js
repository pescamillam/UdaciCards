import React, {Component} from "react";
import {View} from "react-native";
import {connect} from 'react-redux';
import {Constants} from 'expo';
import Navigator from "./Navigator";
import AppStatusBar from "./AppStatusBar";

class DeckApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: Constants.statusBarHeight}}>
          <AppStatusBar/>
        </View>
        <Navigator/>
      </View>
    )
  }
}

export default connect()(DeckApp);