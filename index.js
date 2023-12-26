/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {AppBinder} from './src/Screens/AppBinder';
import StartView from './src/Screens/Auth/Start/StartView';

AppRegistry.registerComponent(appName, () => StartView);
