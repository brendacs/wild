import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import styles from './styles';
import Field from '../Field/Field';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Log In</Text>
        <Field placeholder="Username" />
        <Field placeholder="Password" />
        <PrimaryButton text="Log In" onPress={this.props.onPressLogIn} />
        <TouchableOpacity style={styles.signup} onPress={this.props.onPressSignUp}>
          <Text style={styles.signupText}>Need an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Login;
