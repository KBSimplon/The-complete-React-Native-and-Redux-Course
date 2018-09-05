//Import a library to helpcreat a component 
import React from 'react';
import { View, AppRegistry } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
);

//Render It to the Device
console.ignoredYellowBox = ['Remote debugger'];
AppRegistry.registerComponent('albums', () => App);
