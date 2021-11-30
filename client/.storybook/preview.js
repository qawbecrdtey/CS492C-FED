import React from 'react';
import '../src/index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../src/reducers/index';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const persistConfig = {
  key: 'root',
  storage,
};

const persisted = persistReducer(persistConfig, reducer);

const store = createStore(
  persisted,
  compose(applyMiddleware(promiseMiddleware, ReduxThunk))
);

const persistor = persistStore(store);

export const decorators = [
  Story => (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Story />
    </PersistGate>
  </Provider>
  ),
]

// document.getElementById('root')
