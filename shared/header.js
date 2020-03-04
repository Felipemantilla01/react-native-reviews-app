import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


export default function Header({navigation, title}){

const openMenu = () => {
    navigation.openDrawer()
}


    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View >
                <Text style={styles.headerText}> {title}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',        
        flex:1
        
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#fff',
        letterSpacing:1,            
    },
    icon:{
        color:'white',
        position:'absolute',
        left:-50,   
    },

})