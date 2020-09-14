import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  SourceSansPro_400Regular as SourceSansPro400,
} from '@expo-google-fonts/source-sans-pro';

export default function Video() {
  let [fontsLoaded] = useFonts({ SourceSansPro400, });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
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
});