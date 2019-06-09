import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../Containers/LoginScreen';
import SignUpScreen from '../Containers/SignUpScreen';
import MapScreen from '../Containers/MapScreen';
import AppIntro from '../Components/AppIntro/AppIntro';

const AppNavigator = createStackNavigator(
  {
    IntroScreen: {
      screen: AppIntro,
      navigationOptions: {
        header: null,
      }
    },
    LoginScreen: {
      screen: LoginScreen,
    },
    SignUpScreen: {
      screen: SignUpScreen,
    },
    MapScreen: {
      screen: MapScreen,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    initialRouteName: 'IntroScreen'
  }
);

export default AppNavigator;
