import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#e02041" />
        <Routes />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
