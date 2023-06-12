import Ionicons from '@expo/vector-icons/Ionicons'
import {styles} from './styles'
import {View, Text, TouchableOpacity} from 'react-native'

const CartItem = ({item, onRemove}) => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.content}>
                    <Text style={styles.quantity}>qty:{item.quantity}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => onRemove(item.id)}>
                    <Ionicons name='trash' size={22} color='#212121' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem;