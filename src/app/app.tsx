import {AppNavigator} from '@navigation/navigators';
import {MSTStoreContextProvider} from '@state';
import React from 'react';

export function App() {
  return (
    <MSTStoreContextProvider>
      <AppNavigator />
    </MSTStoreContextProvider>
  );
}
