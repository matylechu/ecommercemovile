import {useFonts} from 'expo-font'

import { ActivityIndicator, View } from 'react-native';
import {styles} from './styles'
import { Provider } from 'react-redux';
import AppNavigator from './navigation';
import store from './store/index'

export default function App() {
  const [loaded] = useFonts({
    'Light': require('../assets/fonts/Montserrat-Light.ttf'),
    'LightItalic': require('../assets/fonts/Montserrat-LightItalic.ttf'),
    'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Thin': require('../assets/fonts/Montserrat-Thin.ttf'),
    'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
    

  })
  if(!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#red' />
      </View>
    )
  }


  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
;
