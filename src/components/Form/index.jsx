import React from 'react';
import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Pressable, Keyboard } from 'react-native';

import { styles } from './styles';



export function Form({ textPounds, textHeight, nameButtonText }) {
  const [pounds, setPounds] = useState(null);
  const [height, setHeigt] = useState(null);


  return (
    <Pressable onPress={Keyboard.dismiss}>
      <View style={styles.containerCalc}>
        <View style={styles.form}>
          <View style={styles.containerTexts}>
            <Text style={styles.texts}>{textPounds}</Text>
            <TextInput style={styles.inputsTexts} value={pounds} onChangeText={setPounds} keyboardType='numeric' placeholder='Ex: 60' />
            <Text style={styles.texts}>{textHeight}</Text>
            <TextInput style={styles.inputsTexts} value={height} onChangeText={setHeigt} keyboardType='numeric' placeholder='Ex: 1.70' />
          </View>
          <View style={styles.containerButtom}>
            <TouchableOpacity style={styles.inputButtom}>
              <Text style={styles.textInput}>{nameButtonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>

  );
}

