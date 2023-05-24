import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Categorias, Detalle, Productos } from '../../screens'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Categorias'
        screenOptions={{
            headerStyle:{
                backgroundColor:'#e63946'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
                fontFamily:'Regular',
            }
        }}>
            <Stack.Screen name='Categorias' component={Categorias} options={{headerShown: false}} />
            <Stack.Screen name='Productos' component={Productos}
            options={({route}) =>({
                title: route.params.name
            })} />
            <Stack.Screen name='Detalle' component={Detalle}
            options={({route})=> ({
                title: route.params.name
            })}  />
        </Stack.Navigator>
    )
}

export default MainNavigator;