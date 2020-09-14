import React, { useState } from 'react';
import { ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Routes from './routes';
import ThemeContext from './ThemeContext'

export default function App() {
  const [route, setRoute] = useState<string>('Home')

  const darkTheme = { text: 'white', background: 'black', barStyle: 'light-content'}

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeContext.Consumer>
      {(theme) => {
        return (
        <SafeAreaView style={{
          backgroundColor: theme.background,
          flex: 1,}}>
              <StatusBar barStyle={theme.barStyle} />
            <ScrollView>
              <Header/>
              <Routes route={route}/>
            </ScrollView>
            <NavBar setRoute={ setRoute }/>
        </SafeAreaView>
      )}}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}
