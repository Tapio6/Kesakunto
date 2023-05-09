import React, { useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import DatePicker from 'react-native-datepicker';

const DateSelector = ({ date, onDateChange }) => {
    return (
      <View>
        <DatePicker style={styles.container} date={date} onDateChange={onDateChange} mode="date" />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default DateSelector;
