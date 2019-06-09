import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Callout = ({ text, subtext, buttons }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.subtext}>{subtext}</Text>
      { buttons ?
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.button, styles.donate]}>
            <Text style={styles.buttonText}>$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.petition]}>
            <Text style={styles.buttonText}>P</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.info]}>
            <Text style={styles.buttonText}>i</Text>
          </TouchableOpacity>
        </View>
      : null }
    </View>
    <View style={styles.tip} />
  </View>
);

export default Callout;
