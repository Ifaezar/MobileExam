import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import reducers from './src/reducers'
import LoginScreen from './src/screen/LoginScreen';
import { createStore, applyMiddleware } from "redux";
import HomeScreen from './src/screen/HomeScreen';
import RootNavigator from './src/screen/RootNavigator';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator/>
    </Provider>
  );
}

