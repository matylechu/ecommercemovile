import React from "react";
import {View, TouchableOpacity, Text, Image} from 'react-native'

import {styles} from './styles'

const ProductItem = ({item, onSelected}) => {
    return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.containerTouchable}
        onPress={() => onSelected(item)}>
            <View>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text style={styles.price}>${item.price}</Text>
        </TouchableOpacity>
    </View>
    )
}
export default ProductItem