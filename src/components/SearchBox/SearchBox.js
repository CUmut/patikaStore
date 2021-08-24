import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const SearchBox = () => {
  return (
    <TextInput
      style={styles.text_search_input}
      placeholder="Ara..."></TextInput>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text_search_input: {
    backgroundColor: '#dcdcdc',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  }
});

export default SearchBox;
