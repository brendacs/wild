import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const Field = ({ placeholder, onChangeText, autoCapitalize }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
    />
  </View>
);

export default Field;
