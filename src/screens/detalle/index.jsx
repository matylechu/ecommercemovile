import React from "react";
import {View, Text, Image, Button} from 'react-native'
import {styles} from './styles'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";

const Detalle = ({}) => {
    const dispath = useDispatch()
    const product = useSelector((state) => state.products.selected)

    const onAddtoCart = () =>{
    dispath(addToCart(product))
    }

    return(
        <View style={styles.container}>
            <Image resizeMode="contain" source={{uri: product.image}} style={styles.image}/>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Button title="Añadir al carrito" onPress={onAddtoCart} color='red' />
        </View>
    )
}

export default Detalle