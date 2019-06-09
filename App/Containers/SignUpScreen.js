import React, { Component } from 'react';
import SignUp from '../Components/SignUp/SignUp';

class SignUpScreen extends Component {
  render() {
    return (
      <SignUp
        onPressHaveAcc={() => this.props.navigation.navigate('LoginScreen')}
        onPressSubmit={() => this.props.navigation.navigate('MapScreen')}
      />
    );
  }
}
export default SignUpScreen;
