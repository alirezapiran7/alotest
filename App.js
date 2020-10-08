/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Root } from 'native-base'
import { Post } from './src/api'
import Navigation from './src/navigation/index'
import { color } from './src/constants';

const App: () => React$Node = () => {
  return (
    <>
      <View style={{flex:1}}>
        <Root>
          <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={color.transparent} />
          <Navigation />

        </Root>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
