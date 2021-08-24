import React from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import Header from './src/components/Header/Header';
import PatikaStore from './src/components/PatikaStore/PatikaStore';
import SearchBox from './src/components/SearchBox/SearchBox';
import patika_data from './src/patika_store_data.json';

const App = () => {
  const renderProduct = ({item}) => <PatikaStore product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBox />
      <FlatList
        data={patika_data}
        horizontal={false}
        numColumns={2}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default App;
