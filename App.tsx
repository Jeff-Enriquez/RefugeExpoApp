import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Routes from './routes';
export default function App() {
  const [route, setRoute] = useState<string>('Home')

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle='light-content' />
      <Header/>
      <Routes route={route}/>
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
