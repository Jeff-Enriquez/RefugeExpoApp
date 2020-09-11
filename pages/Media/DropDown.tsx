import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  SourceSansPro_400Regular as SourceSansPro400,
  SourceSansPro_600SemiBold as SourceSansPro600,
} from '@expo-google-fonts/source-sans-pro';

export default function DropDown() {
  let [fontsLoaded] = useFonts({
    SourceSansPro400, SourceSansPro600,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Refuge Unplugged</Text>
        </View>
        <View>
          <Text style={styles.text}>Refuge Unplugged</Text>
          <Text style={styles.text}>Refuge Kids</Text>
          <Text style={styles.text}>RefugeLIVE TV</Text>
          <Text style={styles.text}>Convos & Coffee</Text>
          <Text style={styles.text}>Beloved: Relational TV</Text>
          <Text style={styles.text}>Rapha: Healing TV</Text>
          <Text style={styles.text}>Daughters of the King TV</Text>
          <Text style={styles.text}>Refuge Men TV</Text>
          <Text style={styles.text}>Prophetic TV with Yvonne Camper</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
    flex: 1,
  },
  heading: {
    color: 'white',
    fontFamily: 'SourceSansPro600',
    fontSize: 16,
  },
  text: {
    color: 'white',
    fontFamily: 'SourceSansPro400',
    fontSize: 16,
  },
});