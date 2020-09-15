import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Image } from 'react-native-elements';
import { AppLoading } from 'expo';
import {
  useFonts,
  Montserrat_400Regular as Montserrat400,
} from '@expo-google-fonts/montserrat';
import ThemeContext from '../../ThemeContext'

export default function NavBar({ setRoute }) {
  let [fontsLoaded] = useFonts({
    Montserrat400,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeContext.Consumer>
      {({ theme }) => {
        return ( 
        <>
        <View style={styles.margin}></View>
        <View style={[styles.navBar, { backgroundColor: theme.background, borderTopColor: theme.navBorder },]}>
          <TouchableWithoutFeedback onPress={() => setRoute('Home')}>
            <View style={styles.navOption}>
              {
                theme.isLight ?
                <Image source={require('../../assets/images/home-black.png')} style={{width: 23, height: 22.34}}/>
                :
                <Image source={require('../../assets/images/home-white.png')} style={{width: 23, height: 22.34}}/>
              }
              <Text style={[styles.text, { color: theme.text }]}>Home</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setRoute('Media')}>
            <View style={styles.navOption}>
              {
                theme.isLight ?
                <Image source={require('../../assets/images/media-black.png')} style={{width: 23, height: 23}}/>
                :
                <Image source={require('../../assets/images/media-white.png')} style={{width: 23, height: 23}}/>
              }
              <Text style={[styles.text, { color: theme.text }]}>Media</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setRoute('Give')}>
            <View style={styles.navOption}>
              {
                theme.isLight
                ?
                <Image source={require('../../assets/images/give-black.png')} style={{width: 23, height: 23}}/>
                :
                <Image source={require('../../assets/images/give-white.png')} style={{width: 23, height: 23}}/>
              }
              <Text style={[styles.text, { color: theme.text }]}>Give</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setRoute('More')}>
            <View style={styles.navOption}>
              {
                theme.isLight
                ?
                <Image source={require('../../assets/images/more-black.png')} style={{width: 23, height: 19.17}}/>
                :
                <Image source={require('../../assets/images/more-white.png')} style={{width: 23, height: 19.17}}/>
              }
              <Text style={[styles.text, { color: theme.text }]}>More</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        </>
      )}}
      </ThemeContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  margin: {
    height: 55,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    maxHeight: 55,
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    borderTopWidth: 1,
  },
  navOption: {
    minHeight: 55,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
  text: {
    fontFamily: 'Montserrat400',
    fontSize: 12,
    paddingTop: 3,
  },
});
