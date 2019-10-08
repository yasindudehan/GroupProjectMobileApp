import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Picker,
  Button,
  Modal,
  TouchableHighlight,
  Alert,
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Form,
  Icon,
} from 'native-base';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import SalesInvoice from './Invoice';

import SubmitOrder from './SubmitOrder';
class OrderScreenD extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2bbbad" barStyle="light-content" />

        <View style={{alignItems: 'center'}}>
          <Text
            style={{fontSize: 40, fontFamily: 'Cochin', fontWeight: 'bold'}}>
            Add Order
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'skyblue',
              width: 70,
              height: 70,
              borderRadius: 100,
            }}
            onPress={this.newOrder}>
            <Text
              style={{
                fontSize: 50,
                textAlign: 'center',
                fontFamily: 'Cochin',
                fontWeight: 'bold',
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  newOrder = () => {
    // alert('AddNew Order');
    this.props.navigation.navigate('Invoice');
  };
}

const styles = (StyleSheet.salesrepNeworder = {
  container: {
    flex: 1,
    backgroundColor: '#2bbbad',
  },
  routeText: {
    margin: 10,
    fontSize: 20,
  },
  backlogo: {
    width: 40,
    height: 30,
    margin: 0,
  },
  picker: {
    backgroundColor: 'skyblue',
    height: 40,
    margin: 10,
  },
});
const MainNavigator = createStackNavigator({
  Home: {screen: OrderScreenD},
  
  Invoice: {screen: Invoice},
 
  SubmitOrder: {screen: SubmitOrder},
});

const App = createAppContainer(MainNavigator);

export default App;
