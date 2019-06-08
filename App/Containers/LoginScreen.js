import React, { Component } from 'react';
import Login from '../Components/Login/Login';

class LoginScreen extends Component {
  render() {
    return (
      <Login
        onPressSignUp={() => this.props.navigation.navigate('SignUpScreen')}
        onPressLogIn={() => this.props.navigation.navigate('MapScreen')}
      />
    );
  }
}
export default LoginScreen;
