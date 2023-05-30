import React from "react";
import {FlatList, SafeAreaView, View, Image} from 'react-native'

import {styles} from './styles'
import  CategoryItem  from "../../components/category-item";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../store/actions";

const Categorias = ({navigation}) => {
    const dispatch = useDispatch()

    const categories = useSelector((state) => state.categories.data)
    const onSelected = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Productos', {
            name: item.name
        })
    }

    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected} />

    const keyExtractor = (item) => item.id.toString()
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Image resizeMode="contain" source={{uri: 'https://tiendariver.vteximg.com.br/arquivos/newLogo_1200x300_rojoynegro.png?v=637838351505300000'}} style={styles.image}/>
            </View>
            <FlatList 
            data={categories}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            />
            
        </SafeAreaView>
    )
}

export default Categorias