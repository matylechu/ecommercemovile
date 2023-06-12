import {React, useEffect} from "react";
import {SafeAreaView, FlatList} from 'react-native'
import { useSelector, useDispatch } from "react-redux";


import {styles} from './styles'
import { ProductItem } from "../../components";
import {filterProducts,selectProduct} from '../../store/actions'

const Productos = ({navigation, route}) => {
    const dispatch = useDispatch()
    const category = useSelector((state) => state.categories.selected)
    const filteredProducts = useSelector((state) => state.products.filteredProducts)

    const onSelected = (item) => {
        dispatch(selectProduct(item.id))
        navigation.navigate('Detalle', {
            name: item.name,
        })
    } 

    useEffect(() => {
        dispatch(filterProducts(category.id))
    }, [])

    const keyExtractor = (item) => item.id.toString()

    const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected} />
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
            data={filteredProducts}
            renderItem={renderItem} 
            keyExtractor={keyExtractor}
            />
        </SafeAreaView>
    )
}

export default Productos