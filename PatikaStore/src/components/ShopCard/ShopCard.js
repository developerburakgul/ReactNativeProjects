import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import styles from './ShopCard.styles';
const ShopCard = ({shopItem}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: shopItem.imgURL}} />
      <Text style={styles.title}>{shopItem.title}</Text>
      <Text style={styles.price}>{shopItem.price}</Text>
      {!shopItem.inStock && <Text style={styles.outOfStock}>Stokta Yok</Text>}
    </View>
  );
};

export default ShopCard;
