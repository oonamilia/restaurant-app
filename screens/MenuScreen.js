import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, ScrollView, View, Text, TextInput, Button, Alert, FlatList } from 'react-native';
import TextBlock from '../components/TextBlock.js';
import Picture from '../components/Picture.js';

export default class Menu extends Component {
  constructor(props) {
        super(props);
  }

  static navigationOptions = {
    title: 'Ruokalista',
  };

  render() {
    let imageLink = 'https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397_1280.jpg';

    return (
      <ScrollView>
        <View style={styles.container}>
          <Picture link={imageLink} />
          <Text style={styles.h2}> Alkuruoka </Text>
          <FlatList
            data={[
              {key: 'Herkkusienikeitto 13e'},
              {key: 'Nacholautanen 5e'},
              {key: 'Salaatti 7e'}
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />

          <Text style={styles.h2}> Pääruoka </Text>
          <FlatList
            data={[
              {key: 'Burgeri 15e'},
              {key: 'Grillattua kanaa herkkukastikkeella 20e'},
              {key: 'Härän sisäfilepihvi 25e'},
              {key: 'Kermainen lohi 25e'}
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />

          <Text style={styles.h2}> Jälkiruoka </Text>
          <FlatList
            data={[
              {key: 'Suklaakakku 8e'},
              {key: 'Jäätelöpallo 4e'},
              {key: 'Omenapiirakka 7e'}
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 16
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  h2: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 15,
    backgroundColor: '#212121',
    color: '#fff',
  },
});
