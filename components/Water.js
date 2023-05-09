import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const WaterCalc = () => {
  const [waterIntake, setWaterIntake] = useState(0);

  useEffect(() => {
    getWaterIntake();
  }, []);

  const getWaterIntake = async () => {
    try {
      const value = await AsyncStorage.getItem('waterIntake');
      if (value !== null) {
        setWaterIntake(parseInt(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const saveWaterIntake = async () => {
    try {
      await AsyncStorage.setItem('waterIntake', waterIntake.toString());
    } catch (e) {
      console.log(e);
    }
  };

  const addWater = () => {
    const newWaterIntake = waterIntake + 0.5;
    setWaterIntake(newWaterIntake);
    saveWaterIntake(newWaterIntake);
  };

  const handleReset = () => {
    setWaterIntake(0);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Water Intake</Text>
        <Text style={styles.goal}>Daily goal: 5L</Text>
        <Text style={styles.water}>{waterIntake}L</Text>
          <TouchableOpacity style={styles.button} onPress={addWater}>
            <Icon name="water-outline" size={30}/>
          </TouchableOpacity>
        <TouchableOpacity style={styles.refreshButton} onPress={handleReset}>
        <Icon name="refresh-circle-outline" size={20}/>
        </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor: '#fff',
  paddingHorizontal: 20,
  paddingBottom: 30,
},
header: {
  fontSize: 30,
  fontWeight: 'bold',
  marginTop: 50,
},
goal: {
  fontSize: 20,
  marginTop: 20,
},
water: {
  fontSize: 50,
  fontWeight: 'bold',
  marginTop: 20,
},
button: {
  backgroundColor: '#3498db',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  marginTop: 20,
},
refreshButton: {
  backgroundColor: '#FF0000',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  marginTop: 20,
},
});

export default WaterCalc;
