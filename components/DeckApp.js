import React, {Component} from "react";
import {View} from "react-native";
import {connect} from 'react-redux';
import {Constants} from 'expo';
import TabNavigator from "./TabNavigator";
import AppStatusBar from "./AppStatusBar";

class DeckApp extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={{height: Constants.statusBarHeight}}>
          <AppStatusBar/>
        </View>
        <TabNavigator navigation={navigation}/>
      </View>
    )
  }
}

export default connect()(DeckApp);