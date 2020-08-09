import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Root from './screens';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Root />
      </SafeAreaView>
    </>
  );
};

export default App;
