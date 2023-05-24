import React from 'react';
import { Text, View } from 'react-native';
import {styles} from './styles'

export function Title() {
  return (
    <View>
      <Text style={styles.title}>IMC Calculator</Text>
    </View>
  );
}