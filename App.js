import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import OrderScreen from './screens/OrderScreen.js';
import Picture from './components/Picture.js';
import TextBlock from './components/TextBlock.js';

class HomeScreen extends React.Component {
  constructor(props) {
        super(props);
        this.state = {text: ''};
  }
  static navigationOptions = {
    title: 'Etusivu',
  };


  render() {
    let welcomeMessage = 'Tervetuloa ravintolan sovellukseen!';
    let introduction = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    return (
      <View >
        <View>
          <Picture />
          <Text style={styles.h1}>Ravintola Koirankarvat</Text>
        </View>

        <View style={styles.container}>

          <TextBlock message={welcomeMessage} />
          <TextBlock message={introduction} />

          <View style={{margin: 8}}>
            <Button
                  title="Varaa pöytä"
                  onPress={() => this.props.navigation.navigate('Order')}
                  color="#e89700"
            />
          </View>
          <View>
            <Button
                  title="Toinen nappula"
                  onPress={() => this.props.navigation.navigate('Order')}
                  color="#a8a8a8"
            />
          </View>
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Order: OrderScreen
  },
  {
    initialRouteName: "Home"
  }
);

/* Navigaation mukaan näytetään screen https://reactnavigation.org/docs/en/hello-react-navigation.html */
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 30,
    marginBottom: 30
  },
});
