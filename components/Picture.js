import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Button, Alert } from 'react-native';


export default class Picture extends Component {
  render() {
    
    return (
      <View>
        <Image source={{uri: this.props.link}} style={styles.pic}/>
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
  pic: {
    width: '100%',
    height: 240
  }
});
