import React, { useState } from 'react';
import * as Font from 'expo-font'
import Home from './screens/home'
import { AppLoading } from 'expo'

const getFonts = () =>Font.loadAsync({
    'oswald-regular': require('./assets/fonts/Oswald-Regular.ttf'),
    'oswald-bold': require('./assets/fonts/Oswald-Bold.ttf')
  })



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
      <Home/>
    );
  }else{
    return(
      <AppLoading 
    startAsync={getFonts}
    onFinish={()=>setFontsLoaded(true)}
    />
    )
  }
}
