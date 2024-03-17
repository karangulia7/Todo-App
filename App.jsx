import React from 'react';
import { Text, View } from 'react-native';
import Main from './src/Main';
import { PaperProvider } from 'react-native-paper';
const App = () => {
  return (
    <PaperProvider>
      <Main/>
    </PaperProvider>
  );
};
export default App;
