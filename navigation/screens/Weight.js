import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Weighings from '../../components/MWeights';


export default function ProgramsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Syötä aamupaino</Text>
      <Weighings/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 0,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 50
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
  },
});