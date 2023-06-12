import React from "react";
import {View, Text, Image} from 'react-native'
import {styles} from './styles'
import { useSelector } from "react-redux";

const Detalle = ({}) => {
    const product = useSelector((state) => state.products.selected)

    return(
        <View style={styles.container}>
            <Image resizeMode="contain" source={{uri: product.image}} style={styles.image}/>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
        </View>
    )
}

export default Detalle