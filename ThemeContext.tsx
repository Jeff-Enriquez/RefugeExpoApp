import React from 'react';

const ThemeContext = React.createContext({ 
  text: 'white',
  background: 'black', 
  barStyle: 'light-content'
});

export default ThemeContext