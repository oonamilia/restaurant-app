import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Button, Alert } from 'react-native';


export default class Picture extends Component {
  render() {
    let pic = {
      uri: 'https://cdn.pixabay.com/photo/2017/01/03/06/24/restaurant-1948732_1280.jpg'
    };
    return (
      <View>
        <Image source={pic} style={styles.pic}/>
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
