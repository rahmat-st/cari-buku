import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './routes';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Route />
    </NavigationContainer>
  );
};

export default App;
