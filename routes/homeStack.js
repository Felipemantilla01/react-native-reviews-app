import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/about'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'
import React from 'react'

const screens = {
    Home:{
        screen:Home,
        navigationOptions: ({navigation})=>{
            return {
                headerTitle:()=> <Header navigation={navigation} title='Game Zone'/>,
            }
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions: {
            title:'details'
        }  
    },

}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#3076D2',            
            
        },
        headerTintColor:'#fff',
        
    }
})

export default HomeStack