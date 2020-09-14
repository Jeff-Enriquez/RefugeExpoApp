import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { AppLoading } from 'expo';
import {
  useFonts,
  Montserrat_600SemiBold as Montserrat600,
} from '@expo-google-fonts/montserrat';
import ThemeContext from '../../ThemeContext'


export default function Header() {
  let [fontsLoaded] = useFonts({
    Montserrat600,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeContext.Consumer>
      {({ theme }) => {
        return ( 
        <View style={[styles.heading, { backgroundColor: theme.background }]}>
          <Image source={require('../../assets/images/fire-icon.png')} style={{width: 16, height: 20}}/>
          <Text style={[styles.headingText, { color: theme.text }]}>Refuge</Text>
        </View>
      )}}
      </ThemeContext.Consumer>
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
    zIndex: 999,
    paddingVertical: 3,
  },
  headingText: {
    marginLeft: 5,
    fontFamily: 'Montserrat600',
    fontSize: 14,
    letterSpacing: 1,
  },
});
