import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Montserrat_400Regular as Montserrat400,
} from '@expo-google-fonts/montserrat';
import VideoItem from '../../../components/Video'
import ThemeContext from '../../../ThemeContext'

export default function Media() {
  let [fontsLoaded] = useFonts({ Montserrat400, });
  const [data, setData] = useState<string>('react native videos')
  const [miniCardData, setMiniCardData] = useState([])
  const youtubeAPI = process.env.REACT_NATIVE_YOUTUBE_API

  const fetchData = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${data}songs&type=video&key=${youtubeAPI}`)
    .then(res => res.json())
    .then( data => {
      console.log(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeContext.Consumer>
      {({ theme }) => {
        return ( 
      <>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/images/worship-guitar.jpg')}/>
        <Text style={[styles.text, { color: theme.text }]}>Come back to this screen for our live streaming service</Text>
      </View>
      <VideoItem/>
      <VideoItem/>
      <VideoItem/>
      <VideoItem/>
      <VideoItem/>
      <VideoItem/>
      <VideoItem/>
      <VideoItem/>
      <VideoItem/>
      </>
      )}}
      </ThemeContext.Consumer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Montserrat400',
    fontSize: 10,
    paddingTop: 5,
  },
  image: {
    width: '100%',
    height: 220,
  }
});