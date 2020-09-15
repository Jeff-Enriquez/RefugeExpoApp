import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  SourceSansPro_400Regular as SourceSansPro400,
} from '@expo-google-fonts/source-sans-pro';
import ThemeContext from '../../ThemeContext'


export default function DropDown() {
  const flipImage = useRef(new Animated.Value(1)).current;
  const [scaleValue, setScaleValue] = useState<number>(1)
  const menuOptionsSlide = useRef(new Animated.Value(-240)).current;
  const [menuOptionsSlideValue, setMenuOptionsSlideValue] = useState<number>(-240)

  const animateMenu = () => {
    setScaleValue(prevNum => prevNum === -1 ? 1 : -1)
    setMenuOptionsSlideValue(prevValue => prevValue === -240 ? 68 : -240)
  }

  useEffect(() => {
    Animated.timing(flipImage, {
      toValue: scaleValue,
      duration: 200, 
      useNativeDriver: true
    }).start();
  }, [scaleValue])

  useEffect(() => {
    Animated.timing(menuOptionsSlide, {
      toValue: menuOptionsSlideValue,
      duration: 200, 
      useNativeDriver: true
    }).start();
  }, [menuOptionsSlideValue])

  let [fontsLoaded] = useFonts({ SourceSansPro400 });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeContext.Consumer>
      {({ theme }) => {
        return ( 
        <>
        <TouchableWithoutFeedback onPress={() => animateMenu()}>
          <View style={[styles.headingContainer, { backgroundColor: theme.dropDownBackground }]}>
            <Text style={[styles.heading, { color: theme.text }]}>Refuge Unplugged</Text>
            <Animated.Image 
              style={[styles.arrow, {
                transform: [{ scaleY: flipImage }]
              }]} source={ theme.isLight ? require('../../assets/images/arrow-black.png') : require('../../assets/images/arrow-white.png')}/>
          </View>
        </TouchableWithoutFeedback>
        <Animated.View
          style={[styles.textContainer, 
            { backgroundColor: theme.dropDownBackground }, 
            { borderColor: theme.dropDownBorder },
            { transform: [{ translateY: menuOptionsSlide }] }
            ]}>
          <Text style={[styles.text1, { color: theme.text }, { borderColor: theme.dropDownBorder }]}>Refuge Unplugged</Text>
          <Text style={[styles.text, { color: theme.text }, { borderColor: theme.dropDownBorder }]}>Refuge Kids</Text>
          <Text style={[styles.text, { color: theme.text }, { borderColor: theme.dropDownBorder }]}>RefugeLIVE TV</Text>
          <Text style={[styles.text, { color: theme.text }, { borderColor: theme.dropDownBorder }]}>Convos & Coffee</Text>
          <Text style={[styles.text, { color: theme.text }, { borderColor: theme.dropDownBorder }]}>Beloved: Relational TV</Text>
          <Text style={[styles.text, { color: theme.text }, { borderColor: theme.dropDownBorder }]}>Rapha: Healing TV</Text>
          <Text style={[styles.text, { color: theme.text }, { borderColor: theme.dropDownBorder }]}>Daughters of the King TV</Text>
          <Text style={[styles.text, { color: theme.text }, { borderColor: theme.dropDownBorder }]}>Refuge Men TV</Text>
          <Text style={[styles.text, { color: theme.text }, { borderColor: theme.dropDownBorder }]}>Prophetic TV with Yvonne Camper</Text>
        </Animated.View>
        </>
      )}}
      </ThemeContext.Consumer>
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
    paddingVertical: 5,
    zIndex: 101
  },
  heading: {
    fontFamily: 'SourceSansPro400',
    fontSize: 16,
    marginLeft: 10,
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 3,
    borderTopWidth: 0.5,
    zIndex: 100,
  },
  text1: {
    fontFamily: 'SourceSansPro400',
    fontSize: 16,
    width: 300,
    textAlign: 'center',
    paddingVertical: 3,
  },
  text: {
    fontFamily: 'SourceSansPro400',
    fontSize: 16,
    width: 300,
    textAlign: 'center',
    borderTopWidth: 0.3,
    paddingVertical: 3,
  },
  arrow: {
    marginRight: 10,
    width: 18, 
    height: 11,
  }
});