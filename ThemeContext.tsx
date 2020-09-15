import React from 'react';

type barStates = 'default' | 'light-content'

export interface Theme {
  text: string
  background: string
  barStyle: barStates
  isLight: boolean
  dropDownBackground: string
  dropDownBorder: string
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
    isLight: true,
    dropDownBackground: '#FFE0B2',
    dropDownBorder: '#BDBDBD',
  },
  dark: {
    text: 'white',
    background: 'black', 
    barStyle: 'light-content',
    isLight: false,
    dropDownBackground: '#333333',
    dropDownBorder: '#C3C3C3',
  }
}


const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export default ThemeContext