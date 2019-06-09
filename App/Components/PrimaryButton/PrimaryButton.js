import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const PrimaryButton = ({ text, onPress, buttonStyles }) => (
  <View>
    <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  </View>
);

export default PrimaryButton;
