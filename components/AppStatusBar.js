import React, {Component} from 'react';
import {Constants} from "expo";
import {StatusBar, View} from "react-native";

export default class AppStatusBar extends Component {
  render() {
    return (
      <View style={{height: Constants.statusBarHeight}}>
        <StatusBar/>
      </View>
    );
  }
}