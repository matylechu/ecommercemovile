import React from "react";
import {View, Text, Button, SafeAreaView, FlatList} from 'react-native'
import {PRODUCTS} from '../../constants/data/products'

import {styles} from './styles'
import { ProductItem } from "../../components";

const Productos = ({navigation, route}) => {
    const {categoryId} = route.params;

    const filteredProduct = PRODUCTS.filter((product) => product.category === categoryId )

    const onSelected = (item) => {
        navigation.navigate('Detalle', {
            productId: item.id,
            name: item.name,
            
        })
    }

    const keyExtractor = (item) => item.id.toString()

    const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected} />
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
            data={filteredProduct}
            renderItem={renderItem} 
            keyExtractor={keyExtractor}
            />
        </SafeAreaView>
    )
}

export default Productos