import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  SourceSansPro_400Regular as SourceSansPro400,
  SourceSansPro_600SemiBold as SourceSansPro600,
} from '@expo-google-fonts/source-sans-pro';

export default function Video() {
  let [fontsLoaded] = useFonts({ SourceSansPro400, SourceSansPro600 });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This Is An Example Of A Video Title</Text>
        <TouchableWithoutFeedback>
          <View style={styles.watchNowContainer}>
            <Image style={styles.playBtn} source={require('../../assets/images/play-orange.png')}/>
            <Text style={styles.text}>Watch Now</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#C3C3C3',
    borderTopWidth: 0.5,
    paddingHorizontal: 15,
  },
  title: {
    color: 'white',
    fontFamily: 'SourceSansPro400',
    fontSize: 14,
    paddingTop: 12,
    paddingBottom: 10,
  },
  watchNowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
  },
  playBtn: {
    width: 22,
    height: 22,
    marginHorizontal: 10,
  },
  text: {
    color: '#F19227',
    fontFamily: 'SourceSansPro600',
    fontSize: 14,
  },
});