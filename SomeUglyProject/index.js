import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Ініціалізація AsyncStorage
AsyncStorage.getItem('news').then((news) => {
  if (!news) {
    AsyncStorage.setItem('news', JSON.stringify([]));
  }
});

AppRegistry.registerComponent(appName, () => App);
