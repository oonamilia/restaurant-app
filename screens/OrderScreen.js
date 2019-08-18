import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import TextBlock from '../components/TextBlock.js';

export default class Order extends Component {
  constructor(props) {
        super(props);
        this.state = {name: '', date: '', time: ''};
  }

  static navigationOptions = {
    title: 'Varaa pöytä',
  };

  render() {
    return (

      <View style={styles.container}>

        <TextBlock message='Tee pöytävaraus' />

        <TextBlock message='Nimesi:' />
        <TextInput
          style={styles.inputStyle}
          placeholder="Type here to translate!"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />

        <TextBlock message='Varauksen päivä:' />
        <TextInput
          style={styles.inputStyle}
          placeholder="Type here to translate!"
          onChangeText={(date) => this.setState({date})}
          value={this.state.date}
        />

        <TextBlock message='Kellonaika:' />
        <TextInput
          style={styles.inputStyle}
          placeholder="Type here to translate!"
          onChangeText={(time) => this.setState({time})}
          value={this.state.time}
        />

        <View style={{margin: 8}}>
          <Button
                title="Varaa pöytä"
                onPress={() => {
                  Alert.alert('Kiitos varauksesta! Pöytävaraus on tallennettu ajalle ' + this.state.date + ' klo ' + this.state.time + ' nimellä ' + this.state.name);
                }}
                color="#e89700"
          />
        </View>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  inputStyle: {
    height: 40,
    padding: 5,
    borderColor: '#d6d6d6',
    borderWidth: 1,
    borderRadius: 5
  }
});
