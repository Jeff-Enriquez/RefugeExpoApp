import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Routes from './routes';
import ThemeContext from './ThemeContext'

export default function App() {
  const [route, setRoute] = useState<string>('Home')

  const lightTheme = { text: 'black', background: 'white', barStyle: 'light-content'}

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ThemeContext.Provider value={lightTheme}>
        <ThemeContext.Consumer>
          {(theme) => <StatusBar barStyle={theme.barStyle} />}
        </ThemeContext.Consumer>
        <ScrollView>
          <Header/>
          <Routes route={route}/>
        </ScrollView>
        <NavBar setRoute={ setRoute }/>
      </ThemeContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'black',
  },
});
