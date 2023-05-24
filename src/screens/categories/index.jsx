import React from "react";
import {FlatList, SafeAreaView} from 'react-native'

import {styles} from './styles'
import {CATEGORIES} from '../../constants'
import  CategoryItem  from "../../components/category-item";

const Categorias = ({navigation}) => {
    const onSelected = (item) => {
        navigation.navigate('Productos', {
            categoryId: item.id,
            name: item.name
        })
    }

    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected} />

    const keyExtractor = (item) => item.id.toString()
    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
            data={CATEGORIES}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            />
            
        </SafeAreaView>
    )
}

export default Categorias