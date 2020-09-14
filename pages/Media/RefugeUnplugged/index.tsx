import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Montserrat_400Regular as Montserrat400,
} from '@expo-google-fonts/montserrat';

export default function Media() {
  let [fontsLoaded] = useFonts({ Montserrat400, });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/images/worship-guitar.jpg')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat400',
    fontSize: 24,
  },
  image: {
    width: '100%',
    height: 220,
  }
});