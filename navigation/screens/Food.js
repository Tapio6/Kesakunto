import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FoodSearch from '../../components/FoodSearch';

export default function FoodsScreen() {
  return (
    <View style={styles.container}>
      <FoodSearch></FoodSearch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});