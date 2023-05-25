import {View, Text} from "react-native"
import { styles } from "./styles"

export function ResultIMC( { calc, iscalc } ) {
    return (
        <View style={styles.containerResult}>
            <Text style={styles.textResult}>{iscalc ? "Seu IMC" : ""}</Text>
            <Text style={styles.textResult}>{calc ? calc : ''}</Text>
        </View>
    )
}