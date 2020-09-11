import React from 'react'
import Home from '../pages/Home'
import Media from '../pages/Media'
import Give from '../pages/Give'
import More from '../pages/More'

export default function Routes({ route }) {
  const renderElement = () => {
    if(route === 'Home'){
      return <Home/>
    } else if (route === 'Media'){
      return <Media/>
    } else if (route === 'Give'){
      return <Give/>
    } else if (route === 'More'){
      return <More/>
    }
    return <></>
  };
  return (
    <>
    {renderElement()}
    </>
  )
}