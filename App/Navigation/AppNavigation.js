import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../Containers/LoginScreen';
import SignUpScreen from '../Containers/SignUpScreen';
import MapScreen from '../Containers/MapScreen';
import AppIntro from '../Components/AppIntro/AppIntro';

const AppNavigator = createStackNavigator(
  {
    IntroScreen: {
      screen: AppIntro
    },
    LoginScreen: {
      screen: LoginScreen
    },
    SignUpScreen: {
      screen: SignUpScreen
    },
    MapScreen: {
      screen: MapScreen
    }
  },
  {
    initialRouteName: 'LoginScreen'
  }
);

export default AppNavigator;
