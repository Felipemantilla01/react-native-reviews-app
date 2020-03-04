import React, { useState } from 'react';
import 'react-native-gesture-handler';
import * as Font from 'expo-font'
import Home from './screens/home'
import { AppLoading } from 'expo'
import Navigator from './routes/drawer'

const getFonts = () =>Font.loadAsync({
    'oswald-regular': require('./assets/fonts/Oswald-Regular.ttf'),
    'oswald-bold': require('./assets/fonts/Oswald-Bold.ttf')
  })

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
      <Navigator/>
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
