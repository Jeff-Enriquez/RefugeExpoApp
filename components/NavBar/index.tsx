import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Image } from 'react-native-elements';
import { AppLoading } from 'expo';
import {
  useFonts,
  Montserrat_400Regular as Montserrat400,
} from '@expo-google-fonts/montserrat';

export default function NavBar({ setRoute }) {
  let [fontsLoaded] = useFonts({
    Montserrat400,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.navBar}>
        <TouchableWithoutFeedback onPress={() => setRoute('Home')}>
          <View style={styles.navOption}>
            <Image source={require('../../assets/images/home-white.png')} style={{width: 23, height: 22.34}}/>
            <Text style={styles.text}>Home</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setRoute('Media')}>
          <View style={styles.navOption}>
            <Image source={require('../../assets/images/media-white.png')} style={{width: 23, height: 23}}/>
            <Text style={styles.text}>Media</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setRoute('Give')}>
          <View style={styles.navOption}>
            <Image source={require('../../assets/images/give-white.png')} style={{width: 23, height: 23}}/>
            <Text style={styles.text}>Give</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setRoute('More')}>
          <View style={styles.navOption}>
            <Image source={require('../../assets/images/more-white.png')} style={{width: 23, height: 19.17}}/>
            <Text style={styles.text}>More</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    maxHeight: 55,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    borderTopColor: '#222222',
    borderTopWidth: 1,
  },
  navOption: {
    minHeight: 55,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat400',
    fontSize: 12,
    paddingTop: 3,
  },
});
