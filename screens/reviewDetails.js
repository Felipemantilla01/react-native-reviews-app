import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/global'
import { Button } from 'react-native-elements';

const ReviewDetails = ({navigation}) => {

    const pressHandler = () =>{
        navigation.navigate('Home')
    }

    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails screen</Text>
            <Button type='outline' title="Go Home"  onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({

})


export default ReviewDetails
