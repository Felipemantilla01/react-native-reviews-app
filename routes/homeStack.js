import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/about'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
const screens = {
    Home:{
        screen:Home,
        navigationOptions:{
            title:'GameZone'
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:{
            title:'Details',
            // headerStyle:{
            //     backgroundColor:'#3076D2',
            //     color:'#fff',
            //     textColor:'#fff'
            // }
        }        
    },

}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#3076D2',            
        },
        headerTintColor:'#fff'
    }
})

export default HomeStack