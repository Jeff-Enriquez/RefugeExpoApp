import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { AppLoading } from 'expo';
import {
  useFonts,
  Montserrat_400Regular as Montserrat400,
} from '@expo-google-fonts/montserrat';

export default function Header() {
  let [fontsLoaded] = useFonts({
    Montserrat400,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.heading}>
        <Image source={require('../../assets/images/fire-icon.png')} style={{width: 33, height: 33}}/>
        <Text style={styles.headingText}>Refuge</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    width: '100%',
    maxHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
  },
  headingText: {
    color: 'white',
    fontFamily: 'Montserrat400',
    fontSize: 14,
  },
});
