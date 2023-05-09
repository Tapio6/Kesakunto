import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
// import DateSelector from './DatePicker';


const Weighings = () => {
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [data, setData] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@myData');
      const value = jsonValue != null ? JSON.parse(jsonValue) : [];
      setData(value);
    } catch (e) {
      console.log(e);
    }
  };

  const saveData = async () => {
    try {
      const newData = [...data, { date, number }];
      const jsonValue = JSON.stringify(newData);
      await AsyncStorage.setItem('@myData', jsonValue);
      setData(newData);
      setDate('');
      setNumber('');
    } catch (e) {
      console.log(e);
    }
  };

  const deleteItem = async (index) => {
    try {
      const newData = [...data];
      newData.splice(index, 1);
      const jsonValue = JSON.stringify(newData);
      await AsyncStorage.setItem('@myData', jsonValue);
      setData(newData);
    } catch (e) {
      console.log(e);
    }
  };

  //DatePicker
  /*const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  */  

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text>{item.date}</Text>
      <Text>{item.number}</Text>
      <TouchableOpacity onPress={() => deleteItem(index)}>
        <View style={styles.deleteButton}>
          <Icon name="trash" size={25} />
        </View>
      </TouchableOpacity>
    </View>
  );
  
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flexDirection: 'column', marginBottom: 10 }}>
        <TextInput
          style={styles.input}
          placeholder="Päivämäärä"
          value={date}
          onChangeText={setDate}
          keyboardType="numbers-and-punctuation"
        />
        <TextInput
          style={styles.input}
          placeholder="Paino"
          value={number}
          onChangeText={setNumber}
          keyboardType="numeric"
        />
      </View>
      <Button title="Save" onPress={saveData} />
  
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          stickyHeaderIndices={[]}
        />
      </SafeAreaView>
      
    </View>
  );
  };
  

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    View: {
        width: "80%"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginRight: 10,
        width: '100%'
      },
    button: {
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 5,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        alignItems: 'center',
        width: "70%",
        },
    date: {
        flex: 1,
        marginRight: 10,
      },
    number: {
        flex: 1,
        marginLeft: 10,
      },
    deleteButton: {
        borderRadius: 5,
        padding: 5,
      },
  
      
  });

export default Weighings;
