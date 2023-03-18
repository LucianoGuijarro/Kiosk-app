import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import AppNavigator from './navigation/Index';
import { Provider } from 'react-redux';
import store from './store/index';


export default function App() {
  
  const [loader] = useFonts({
    'KalamRegular': require('../assets/font/Kalam-Regular.ttf'),
    'KalamLight': require('../assets/font/Kalam-Light.ttf'),
    'KalamBold': require('../assets/font/Kalam-Bold.ttf'),
  });

  if (!loader) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <Provider store={store} >
      <AppNavigator />
    </Provider>
  )
}
