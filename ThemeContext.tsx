import React from 'react';

type barStates = 'light-content' | 'dark-content'

interface Theme {
  text: string
  background: string
  barStyle: barStates
  isLight: boolean
}

const theme: Theme ={
  text: 'white',
  background: 'black', 
  barStyle: 'light-content',
  isLight: false
}


const ThemeContext = React.createContext(theme);

export default ThemeContext