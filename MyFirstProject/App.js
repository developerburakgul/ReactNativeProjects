import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', backgroundColor: 'gray',},
  box1: {width: 100, height: 100, backgroundColor: 'red'},
  box2: {width: 100, height: 100, backgroundColor: 'blue'},
  box3: {width: 100, height: 100, backgroundColor: 'brown'},
  box4: {width: 100, height: 100, backgroundColor: 'green'},
});

export default App;
