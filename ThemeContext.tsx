import React from 'react';

type barStates = 'default' | 'dark-content'

export interface Theme {
  text: string
  background: string
  barStyle: barStates
  isLight: boolean
}

interface Themes {
  light: Theme
  dark: Theme
}

export const themes: Themes = {
  light: {
    text: 'black',
    background: 'white', 
    barStyle: 'default',
    isLight: true
  },
  dark: {
    text: 'white',
    background: 'black', 
    barStyle: 'light-content',
    isLight: false
  }
}


const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export default ThemeContext