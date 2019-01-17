
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import Reactotron from './ReactotronConfig'  

const OverlayApp = __DEV__ ? Reactotron.overlay(App) : App

AppRegistry.registerComponent(appName, () => OverlayApp);
 
 
 