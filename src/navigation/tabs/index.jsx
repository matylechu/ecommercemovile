import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import MainNavigator from '../main'
import OrdersNavigator from '../orders'
import CartNavigator from '../cart'


const BottomTab = createBottomTabNavigator()

const TabsNavigator = () => {
    return(
        <BottomTab.Navigator
        initialRouteName='ShopTab'
        screenOptions={{
            headerShown: false,
        tabBarLabelStyle: {
            fontFamily:'Regular',
            fontSize: 12,
        },
        tabBarActiveTintColor: '#e63946',
        tabBarInactiveTintColor: 'lightgray'
        }}
        >
            <BottomTab.Screen name='TIENDARIVER.COM' component={MainNavigator}
            options={{
                tabBarLabel:'Inicio',
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                )
            }}/>
            <BottomTab.Screen name='OrdersTab' component={OrdersNavigator}
            options={{
                tabBarLabel:'Orden',
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'file-tray-full' : 'file-tray'} size={size} color={color} />
                )
            }}/>
            <BottomTab.Screen name='CartTab' component={CartNavigator}
            options={{
                tabBarLabel:'Carrito',
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} color={color} />
                )
            }}/>
        </BottomTab.Navigator>
    )
}

export default TabsNavigator;