import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/about'
import Header from '../shared/header'
import React from 'react'

const screens = {
    About:{
        screen:About,
        navigationOptions: ({navigation})=>{
            return {
                headerTitle:()=> <Header navigation={navigation} title='About'/>,
            }
        } 
    },    
}


const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#3076D2',            
        },
        headerTintColor:'#fff'
    }
})

export default AboutStack