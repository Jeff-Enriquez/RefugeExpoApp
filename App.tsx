import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Routes from './routes';
export default function App() {
  const [route, setRoute] = useState<string>('Home')

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle='light-content' />
      <ScrollView>
        <Header/>
        <Routes route={route}/>
      </ScrollView>
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
