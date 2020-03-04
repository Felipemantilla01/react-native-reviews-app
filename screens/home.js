import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24
    },
    title:{
        fontFamily:'oswald-regular',
        fontSize:18
    }
})


export default Home
