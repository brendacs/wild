import React, { Component } from 'react';
import SignUp from '../Components/SignUp/SignUp';

class SignUpScreen extends Component {
  render() {
    return (
      <SignUp
        onPressHaveAcc={() => this.props.navigation.navigate('LoginScreen')}
      />
    );
  }
}
export default SignUpScreen;
