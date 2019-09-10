import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage,
} from 'react-native';

const Info = {
  userId: 'Sadmin',
  password: '12345',
};
const Info1 = {
  userId1: 'Dadmin',
  password1: '12345',
};

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {userId: '', password: ''};
  }
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./Image/Logo.png')}
          style={styles.backgroundimage}
        />
        <TextInput
          onChangeText={userId => this.setState({userId})}
          value={this.state.userId}
          style={styles.input}
          placeholder="USER ID"
        />
        <TextInput
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
          style={styles.input}
          placeholder="PASSWORD"
        />
        <TouchableOpacity style={styles.button} onPress={this.onSign}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
  onSign = async () => {
    if (
      Info.userId === this.state.userId &&
      Info.password === this.state.password
    ) {
      await AsyncStorage.setItem('logged', '1');
      this.props.navigation.navigate('App');
    } else if (
      Info1.userId1 === this.state.userId &&
      Info1.password1 === this.state.password
    ) {
      await AsyncStorage.setItem('logged', '2');
      this.props.navigation.navigate('App1');
    } else {
      alert('error');
    }
  };
}

const styles = (StyleSheet.cretate = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: '#717e85',
    margin: 10,
  },
  button: {
    margin: 10,
    backgroundColor: '#353738',
    width: 260,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: '#cdd0d1',
    fontSize: 20,
  },
  backgroundimage: {
    width: 150,
    height: 105,
    justifyContent: 'center',
  },
});
