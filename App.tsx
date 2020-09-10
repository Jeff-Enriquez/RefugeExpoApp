import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Heading from './components/Heading'

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle='light-content' />
      <Heading/>
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 40,
    color: 'white',
  }
});
