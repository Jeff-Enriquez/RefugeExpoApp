import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Montserrat_400Regular as Montserrat400,
} from '@expo-google-fonts/montserrat';
import ThemeContext from '../../ThemeContext'

export default function More() {
  let [fontsLoaded] = useFonts({
    Montserrat400,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => {
          return (
        <TouchableWithoutFeedback onPress={toggleTheme}>
          <Text style={[styles.text, { color: theme.text }]}>Toggle Theme</Text>
        </TouchableWithoutFeedback>
        )}}
      </ThemeContext.Consumer>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat400',
    fontSize: 24,
  },
});