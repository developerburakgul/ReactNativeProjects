import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import dataJson from './data.json';
import ShopCard from './components/ShopCard';
import ShopCardHeader from './components/ShopCardHeader';
const App = () => {
  const numColumn = 2;
  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        ListHeaderComponent={ShopCardHeader}
        data={dataJson}
        style={styles.list}
        renderItem={({item}) => <ShopCard shopItem={item}></ShopCard>}
        numColumns={numColumn}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  list: {flex: 1},
});
export default App;
