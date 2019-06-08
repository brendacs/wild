import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const PrimaryButton = ({ text, onPress }) => (
  <View>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  </View>
);

export default PrimaryButton;
