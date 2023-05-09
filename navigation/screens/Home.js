import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WaterCalc from '../../components/Water';

export default function HomeScreen() {
  return (
    <View style={styles.container}> 
    <Text style={styles.title}>Welcome back!</Text>
      <WaterCalc></WaterCalc>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    flex: 0.7
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
  },
});