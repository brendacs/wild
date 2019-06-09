import React, { Component } from 'react';
import Login from '../Components/Login/Login';

class LoginScreen extends Component {
  render() {
    OnPressLogin = () => {
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
        this.props.naviation.navigate('MapScreen');
      })
      .catch((err) => {
        this.setState({ error: err });
      });
    };
    return (
      <Login
        onPressSignUp={() => this.props.navigation.navigate('SignUpScreen')}
        // Idk if this is needed but I can't test so I added it anyways :)
        onPressLogIn={onPressLogIn}
      />
    );
  }
}
export default LoginScreen;
