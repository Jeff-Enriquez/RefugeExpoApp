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
        <Text style={styles.text}>Come back to this screen for our live streaming service</Text>
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
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Montserrat400',
    fontSize: 10,
  },
  image: {
    width: '100%',
    height: 220,
  }
});