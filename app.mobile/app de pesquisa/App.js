import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function App() {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', search);
    // Add API call to search for data
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesquisar</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder='Digite sua pesquisa'
          onChangeText={text => setSearch(text)}
          value={search}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Icon name='search' type='font-awesome' color='#fff' size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    marginLeft: 5,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    marginLeft: 10,
    padding: 5,
  },
});