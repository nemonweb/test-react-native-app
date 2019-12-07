/**
 * @format
 */

import {App} from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {enableScreens} from 'react-native-screens';

enableScreens();

AppRegistry.registerComponent(appName, () => App);
