import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Montserrat_400Regular as Montserrat400,
} from '@expo-google-fonts/montserrat';

export default function Give() {
  let [fontsLoaded] = useFonts({
    Montserrat400,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Give</Text>
      </View>
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