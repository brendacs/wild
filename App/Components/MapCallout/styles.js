import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 3, height: 0, },
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
  },
  content: {
    backgroundColor: '#FFF',
    padding: 10,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tip: {
    zIndex: 1000,
    marginTop: -2,
    elevation: 0,
    backgroundColor: 'transparent',
    borderTopWidth: 16,
    borderRightWidth: 8,
    borderBottomWidth: 0,
    borderLeftWidth: 8,
    borderTopColor: 'white',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent'
  },
  text: {
    fontSize: 20
  },
  subtext: {
    fontSize: 16
  },
  buttons: {
    flexDirection: 'row'
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#63C7B2',
    justifyContent:'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 20,
    shadowOffset: { width: 0, height: 0, },
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOpacity: 0.25,
  },
  donate: {
    backgroundColor: '#71C02A'
  },
  info: {
    backgroundColor: '#5588EE'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
});
