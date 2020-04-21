import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Touchable
  addfield

} from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './component/lib/route';
const AppIndex = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return <AppIndex />;
  }
}

export default App;
