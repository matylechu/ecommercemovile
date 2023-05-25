import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Cart } from '../../screens'


const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    return(
        <Stack.Navigator initialRouteName='Carrito'
        screenOptions={{
            headerStyle:{
                backgroundColor:'#e63946'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
                fontFamily:'Regular',
            }
        }}>
            <Stack.Screen name='Carrito' component={Cart}/>
        </Stack.Navigator>
    )
}

export default CartNavigator