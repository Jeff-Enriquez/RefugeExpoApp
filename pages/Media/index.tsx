import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Montserrat_400Regular as Montserrat400,
} from '@expo-google-fonts/montserrat';
import DropDown from './DropDown'

export default function Media() {
  let [fontsLoaded] = useFonts({
    Montserrat400,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <DropDown/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat400',
    fontSize: 24,
  },
});