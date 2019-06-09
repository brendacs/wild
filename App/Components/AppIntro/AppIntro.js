import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

class AppIntro extends React.Component {
  constructor() {
    super();
    this.max = 2;
    this.state = {
      show: 0
    }
  }

  onPressNext = () => {
    if (this.state.show < this.max) {
      this.setState({ show: this.state.show + 1 })
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        { this.state.show === 0 ?
          <View style={[styles.container, styles.slide1]}>
            <Image
              source={require('./nature.png')}
              style={styles.image}
            />
            <Text style={styles.header}>Visit</Text>
            <Text style={styles.text}>Discover nature in nearby locations and take a visit to breathtaking scenery</Text>
          </View>
          : null
        }
        { this.state.show === 1 ?
          <View style={[styles.container, styles.slide2]}>
            <Image
              source={require('./explore.png')}
              style={styles.image2}
            />
            <Text style={styles.header}>Explore</Text>
            <Text style={styles.text}>Find the best spots in the outdoors and understand the unique history behind each location</Text>
          </View> :
          null
        }
        { this.state.show === 2 ?
          <View style={[styles.container, styles.slide3]}>
            <Image
              source={require('./tree.png')}
              style={styles.image3}
            />
            <Text style={styles.header}>Give Back</Text>
            <Text style={styles.text}>Read through real issues and figure out how you can help with a touch of a button</Text>
          </View> : null
        }
        <View style={styles.buttonContainer}>
          <PrimaryButton
            text="Next"
            buttonStyles={[styles.button, styles.buttonSecond]}
            onPress={this.onPressNext}
          />
          <PrimaryButton
            text="Get Started"
            buttonStyles={styles.button}
            onPress={() => this.props.navigation.navigate('SignUpScreen')}
          />
        </View>
      </View>
    );
  }
}

export default AppIntro;
