import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppStack, linking } from 'src/navigation';

const App = () => (
  <NavigationContainer linking={linking}>
    <AppStack />
  </NavigationContainer>
);

export default App;
