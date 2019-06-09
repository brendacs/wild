import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#80CED7'
  },
  container: {
    height: Dimensions.get('window').height - 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#80CED7'
    // #63C7B2
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    marginBottom: 10
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 30,
    marginBottom: 40
  },
  image2: {
    width: 400,
    height: 300,
    marginTop: 30,
    marginBottom: 40
  },
  image3: {
    width: 250,
    height: 250,
    marginTop: 30,
    marginBottom: 40
  },
  buttonContainer: {
    marginTop: -20
  },
  buttonSecond: {
    backgroundColor: '#63C7B2'
  },
  button: {
    backgroundColor: '#71C02A',
    width: 300
  }
});
