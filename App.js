import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './src/reducers';
import MainScreen from './src/mainScreen';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
);

const App = () => {
  return (
      <Provider store={store}>
          <MainScreen />
      </Provider>
  );
};

export default App;