import {LogBox, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from '../reducer/Store';
import {PersistGate} from 'redux-persist/integration/react';
import App from './Auth/Login/LoginView';

LogBox.ignoreAllLogs();
//const store = myStore();

export const AppBinder = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
