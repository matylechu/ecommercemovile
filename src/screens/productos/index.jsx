import React from "react";
import {View, Text, Button} from 'react-native'
import {styles} from './styles'

const Productos = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Productos</Text>
            <Button 
            title="Ver el Producto"
            onPress={() => navigation.navigate('Detalle')}
            />
        </View>
    )
}

export default Productos