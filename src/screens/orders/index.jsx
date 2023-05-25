import React from "react";
import {View, Text, FlatList} from 'react-native'

import {styles} from './styles'
import {ORDERS} from '../../constants'
import OrderItem from "../../components/order-item";
const Orders = () => {
    const onRemove = (id) => {console.warn (id)}
    const ketExtractor = (item) => item.id.toString()
    const renderItem = ({item}) => <OrderItem item={item} onRemove={onRemove} />
    return(
        <View style={styles.container}>
            <FlatList
            data={ORDERS}
            keyExtractor={ketExtractor}
            renderItem={renderItem}
            />
        </View>
    )
}

export default Orders; 