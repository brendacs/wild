import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Field from '../Field/Field';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import getContentLength from '../Utils/Utils';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      error: null,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      passwordConf: null
    }
  }

  createUser = () => {
    if (this.state.password !== this.state.passwordConf) {
      return;
    }
    const payload = JSON.stringify({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    });
    fetch('http://localhost:8000/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Content-Length': getContentLength(payload),
      },
      body: payload,
    })
    .then((res) => {
      return res.json();
    })
    .then(data => {
      this.setState({ data: data });
    })
    .catch((err) => {
      this.setState({ error: err });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Sign Up</Text>
        <Field
          placeholder="First Name"
          onChangeText={(val) => this.setState({ firstName: val })}
        />
        <Field
          placeholder="Last Name"
          onChangeText={(val) => this.setState({ lastName: val })}
        />
        <Field
          placeholder="Username"
          onChangeText={(val) => this.setState({ username: val })}
          autoCapitalize={"none"}
        />
        <Field
          placeholder="Email"
          onChangeText={(val) => this.setState({ email: val })}
          autoCapitalize={"none"}
        />
        <Field
          placeholder="Password"
          onChangeText={(val) => this.setState({ password: val })}
          autoCapitalize={"none"}
        />
        <Field
          placeholder="Confirm Password"
          onChangeText={(val) => this.setState({ passwordConf: val })}
          autoCapitalize={"none"}
        />
        <PrimaryButton text="Submit" onPress={this.createUser} />
        <TouchableOpacity style={styles.signup} onPress={this.props.onPressHaveAcc}>
          <Text style={styles.signupText}>Already have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default SignUp;
