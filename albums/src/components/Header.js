import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
  </View>
  ); 
};

const styles = {
  viewStyle: {
    backgroundColor: '#F7F9ED',
    justifyContent: 'center',
    alignItems: 'center', 
    height: 60, 
    paddingTop: 5,
    elevation: 20,
    position: 'relative'
  },

  textStyle: {
    fontSize: 20,
  },
};

export default Header;