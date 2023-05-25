import React from 'react';
import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Pressable, Keyboard } from 'react-native';
import { ResultIMC } from '../resultIMC/index';

import { styles } from './styles';



export function Form({ textPounds, textHeight, nameButtonText }) {
  const [pounds, setPounds] = useState(null);
  const [height, setHeigt] = useState(null);
  const [imc, setImc] = useState(null)
  const [isCalc, setIsCalc] = useState(false);
  const [error, setIsError] = useState(false);


  const imcCalculater = () =>{
      let poundsVar = pounds.replace(",", ".");
      let heightVar = height.replace(",", ".");
      let value = (poundsVar / (heightVar * heightVar)).toFixed(2)
      setImc(value);
  }
  
  const handleOnPress = () =>{
    if(pounds && height !== null){
      imcCalculater()
      setPounds(null)
      setHeigt(null)
      setIsCalc(true);
      setIsError(false);
      Keyboard.dismiss();
      return 
    }
    else{
      setIsError(true)
      setIsCalc(false)
      setImc(null);
    }

  }


  return (
    <Pressable onPress={Keyboard.dismiss}>
      <View style={styles.containerCalc}>
        <View style={styles.form}>
          <View style={styles.containerTexts}>
            <Text style={styles.texts}>{textPounds}</Text>
            <Text style={styles.error}>{error ? "Campo obrigatório *" : ""}</Text>
            <TextInput style={styles.inputsTexts} value={pounds} onChangeText={setPounds} keyboardType='numeric' placeholder='Ex: 60' />
            <Text style={styles.texts}>{textHeight}</Text>
            <Text style={styles.error}>{error ? "Campo obrigatório *" : ""}</Text>
            <TextInput style={styles.inputsTexts} value={height} onChangeText={setHeigt} keyboardType='numeric' placeholder='Ex: 1.70' />
          </View>
          <View style={styles.containerButtom}>
            <TouchableOpacity onPress={handleOnPress} style={styles.inputButtom}>
              <Text style={styles.textInput}>{nameButtonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ResultIMC calc={imc} iscalc={isCalc} />
      </View>
    </Pressable>

  );
}

