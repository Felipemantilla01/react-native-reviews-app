import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, ImageBackground, Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'
import { TouchableOpacity } from 'react-native-gesture-handler';


import Card from '../shared/card'

export default Home = ({ navigation }) => {

    const [modalOpen, setModalOpen] = useState(false)

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of fresh air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta, Catch them all (again)', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'Not so "Final" Fantasy', rating: 2, body: 'lorem ipsum', key: '3' },
    ]);


    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons style={{...styles.modalToggle, ...styles.modalClose}}
                        name='close'
                        size={24}
                        onPress={() => setModalOpen(false)}
                    />
 
                    <Text> Hello from the other side </Text>
                </View>
            </Modal>

            <MaterialIcons style={styles.modalToggle}
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}> {item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex:1
    },
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center'
         

    },
    modalClose:{
        marginTop:20,
        marginBottom:0,

    }
})



