import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import lognSuccess, {loginSuccess} from './src/actions';

import rootReducer from './src/reducers';
import MainScreen from './src/mainScreen';




const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
);

const getAuth = async () => {
    try {
        const auth = await AsyncStorage.getItem('auth');
        const url = await AsyncStorage.getItem('url');
        if (auth !== null & url !== null) {
            store.dispatch(loginSuccess({}, auth, url));
        }
    } catch(e) {
        console.log('не удалось прочитать данные из асинкстор', e)
    }
};

getAuth();
const App = () => {
  return (
      <Provider store={store}>
          <MainScreen />
      </Provider>
  );
};

export default App;