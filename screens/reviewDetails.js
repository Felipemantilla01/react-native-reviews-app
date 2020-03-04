import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/global'
import { Button } from 'react-native-elements';
import Card from '../shared/card'

const ReviewDetails = ({navigation}) => {

    
    return (
        <View style={globalStyles.container}>
            <Card>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({

})


export default ReviewDetails
