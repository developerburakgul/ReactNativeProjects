import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './ShopCardHeader.styles';

const ShopCardHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PATIKASTORE</Text>
      <TextInput style={styles.placeHolder} placeholder="Search"></TextInput>
    </View>
  );
};

export default ShopCardHeader;
