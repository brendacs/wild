import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Field from '../Field/Field';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

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
    fetch('http://localhost:3000/users/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }),
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
      </View>
    );
  }
}
export default SignUp;
