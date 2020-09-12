import React, { useRef, useState, useEffect } from 'react';
import { Animated, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default function FlipImage() {
  const flipImage = useRef(new Animated.Value(-1)).current;
  const [scaleValue, setScaleValue] = useState<number>(-1)

  useEffect(() => {
    Animated.timing(flipImage, {
      toValue: scaleValue,
      duration: 200, 
      useNativeDriver: true
    }).start();
  }, [scaleValue])

  return (
    <TouchableWithoutFeedback onPress={() => setScaleValue(prevNum => prevNum === -1 ? 1 : -1)}>
      <Animated.Image 
        style={[styles.arrow, {
          transform: [{ scaleY: flipImage }]
        }]} source={require('../../assets/images/arrow-white.png')}/>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  arrow: {
    marginRight: 10,
    width: 18, 
    height: 11,
  }
});