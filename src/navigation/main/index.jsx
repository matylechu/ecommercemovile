import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Categorias, Detalle, Productos } from '../../screens'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Categorias'>
            <Stack.Screen name='Categorias' component={Categorias} options={{headerShown: false}} />
            <Stack.Screen name='Productos' component={Productos} />
            <Stack.Screen name='Detalle' component={Detalle} />
        </Stack.Navigator>
    )
}

export default MainNavigator;