import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {/* Para renderizar todo lo que halla dentro del componente desde donde se llame  */}
                {props.children} 
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor: '#fff',
        shadowOffset:{width:1, height:1,},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6,

    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:10
    }
})

export default Card