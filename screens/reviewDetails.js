import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { globalStyles, images } from '../styles/global'
import { Button } from 'react-native-elements';
import Card from '../shared/card'

const ReviewDetails = ({navigation}) => {

    const rating = navigation.getParam('rating')
    
    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating:</Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderTopColor:'#eee'
    }
})


export default ReviewDetails
