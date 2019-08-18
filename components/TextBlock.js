import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Text} from 'react-native';


export default class TextBlock extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}> {this.props.message} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center'
  }
});
