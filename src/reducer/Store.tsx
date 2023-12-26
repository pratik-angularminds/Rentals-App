import {sessionReducer, localReducer} from './StoreState';
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {reducerType} from './ReducerType';
// import { apiReducer } from '../api/apiService/apiReducer';
// import axiosAuth from './axiosAuth';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, sessionReducer);

// function myServiceMiddleware(myService) {
//   return ({dispatch, getState}) =>
//     next =>
//     action => {
//       if (action.type == reducerType.userToken) {
//         myService.doSomething(getState());
//         myService
//           .doSomethingElse()
//           .then(result => dispatch({type: reducerType.userToken, result}));
//       }
//       return next(action);
//     };
// }

function setUpStore() {
  const rootReducer = legacy_createStore(persistedReducer);
  //   const rootReducer = combineReducers({
  //     persistedReducer,
  //     localReducer,
  //   });
  //   const serviceMiddleware = myServiceMiddleware(myService);
  return legacy_createStore(rootReducer, applyMiddleware(thunk));
}

export const store = setUpStore();

export const persistor = persistStore(store);

export default () => {
  const rootReducer = combineReducers({redState: redState});
  return legacy_createStore(rootReducer, applyMiddleware(thunk));
};
