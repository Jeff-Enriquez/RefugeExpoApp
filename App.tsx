import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header';
import NavBar from './components/NavBar';

export default function App() {
  const [route, setRoute] = useState<string>('Home')
  
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle='light-content' />
      <Header/>
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
      </View>
      <NavBar setRoute={ setRoute }/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 40,
    color: 'white',
  }
});
