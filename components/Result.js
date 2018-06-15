import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';

class Result extends Component {

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    return {

    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Score x question right of y questions</Text>
        <Text>XX%</Text>
        <TouchableOpacity>
          <Text>Retry</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Deck List</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect()(Result);