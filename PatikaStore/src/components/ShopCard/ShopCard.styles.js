import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebeff1',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
  image: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.25,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  price: {
    fontSize: 14,
    color: '#808080',
  },
  outOfStock: {
    color: '#ff0000',
  },
});

export default styles;
