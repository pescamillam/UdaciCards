import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer';
import DeckApp from './components/DeckApp';
import storage from 'redux-persist/lib/storage';
import { setLocalNotification } from './utils/helpers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const persistConfig = {
  key: 'root',
  storage,
};

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
  return createStore(persistedReducer, initialState, enhancer);
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({});

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <DeckApp style={{flex: 1}}/>
      </Provider>
    )
  }
}