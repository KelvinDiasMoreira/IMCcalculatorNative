import { StyleSheet, View } from 'react-native';
import {Form} from './src/components/Form';
import { Title } from './src/components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form textPounds="Peso" textHeight="Altura" nameButtonText="Calcular" text/>
    </View>
  );
}


//CSS

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    flex: 1,
  },
});
