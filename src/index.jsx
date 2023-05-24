import {useFonts} from 'expo-font'

import { ActivityIndicator, View } from 'react-native';
import {styles} from './styles'
import AppNavigator from './navigation';

export default function App() {
  const [loaded] = useFonts({
    'Light': require('../assets/fonts/Montserrat-Light.ttf'),
    'LightItalic': require('../assets/fonts/Montserrat-LightItalic.ttf'),
    'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Thin': require('../assets/fonts/Montserrat-Thin.ttf'),

  })
  if(!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#red' />
      </View>
    )
  }


  return (
    <AppNavigator />
  );
}
;
