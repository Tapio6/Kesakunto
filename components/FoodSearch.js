import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const FoodSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const handleSearch = async () => {
    const response = await axios.get(`https://api.nutritionix.com/v1_1/search/${query}?results=0:10&fields=item_name,brand_name,item_id,nf_calories&appId=89f6e968&appKey=8657c3f71e9ecdd1f2351d2b0551aec4`);
    setResults(response.data.hits);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text numberOfLines={3} ellipsizeMode="tail" style={styles.itemName}>{item.fields.item_name}</Text>
      <Text numberOfLines={3} ellipsizeMode="tail" style={styles.itemCalories}>{item.fields.nf_calories}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flexDirection: 'column', marginBottom: 10 }}>
      <TextInput
          style={styles.input}
          placeholder="Calories / 100g"
          value={query}
          onChangeText={setQuery}
          keyboardType="default"
        />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={results}
        keyExtractor={(item) => item.fields.item_id}
        renderItem={renderItem}
        style={styles.list}
      />
      </View>
    </View>
  );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1e81b0',
    },
    View: {
        width: "100%"
    },
    list: {
        marginTop: 20,
      },
    input: {
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginRight: 10,
        marginTop: 40,
        width: '100%'
      },
    itemStyle: {
        padding: 30, 
        fontSize: 30
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        alignItems: 'center',
        width: "100%",
        borderRadius: 8
        },
    itemName: {
        fontWeight: 'bold',
        fontSize: 14,
        },
    itemBrand: {
        fontSize: 12,
        },
    itemCalories: {
        fontSize: 12,
        },
   
      });

export default FoodSearch;
