import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { globalStyles } from '../styles/global'

const Home = ({navigation}) => {

    const pressHandler = () =>{
        // navigation.navigate('ReviewDetails')
        navigation.push('ReviewDetails')
    }


    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
            <Button type='outline' title="Go reviews"  onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({

})


export default Home
