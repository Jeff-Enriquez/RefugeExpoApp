import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  SourceSansPro_400Regular as SourceSansPro400,
} from '@expo-google-fonts/source-sans-pro';

export default function DropDown() {
  const flipImage = useRef(new Animated.Value(-1)).current;
  const [scaleValue, setScaleValue] = useState<number>(-1)

  useEffect(() => {
    Animated.timing(flipImage, {
      toValue: scaleValue,
      duration: 200, 
      useNativeDriver: true
    }).start();
  }, [scaleValue])

  let [fontsLoaded] = useFonts({ SourceSansPro400, });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
      <TouchableWithoutFeedback onPress={() => setScaleValue(prevNum => prevNum === -1 ? 1 : -1)}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Refuge Unplugged</Text>
          <Animated.Image 
            style={[styles.arrow, {
              transform: [{ scaleY: flipImage }]
            }]} source={require('../../assets/images/arrow-white.png')}/>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Refuge Unplugged</Text>
        <Text style={styles.text}>Refuge Kids</Text>
        <Text style={styles.text}>RefugeLIVE TV</Text>
        <Text style={styles.text}>Convos & Coffee</Text>
        <Text style={styles.text}>Beloved: Relational TV</Text>
        <Text style={styles.text}>Rapha: Healing TV</Text>
        <Text style={styles.text}>Daughters of the King TV</Text>
        <Text style={styles.text}>Refuge Men TV</Text>
        <Text style={styles.text}>Prophetic TV with Yvonne Camper</Text>
      </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxHeight: 42,
    backgroundColor: '#222222',
    borderColor: '#C3C3C3',
    borderBottomWidth: 0.5,
    paddingVertical: 5,
  },
  heading: {
    color: 'white',
    fontFamily: 'SourceSansPro400',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginLeft: 10,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
    paddingBottom: 3,
  },
  text1: {
    color: 'white',
    fontFamily: 'SourceSansPro400',
    fontSize: 16,
    width: 300,
    textAlign: 'center',
    paddingVertical: 3,
  },
  text: {
    color: 'white',
    fontFamily: 'SourceSansPro400',
    fontSize: 16,
    width: 300,
    textAlign: 'center',
    borderColor: '#C3C3C3',
    borderTopWidth: 0.3,
    paddingVertical: 3,
  },
  arrow: {
    marginRight: 10,
    width: 18, 
    height: 11,
  }
});