import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, ImageBackground, Modal, Keyboard } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ReviewForm from './reviewForm'

import Card from '../shared/card'

export default Home = ({ navigation }) => {

    const [modalOpen, setModalOpen] = useState(false)

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of fresh air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta, Catch them all (again)', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'Not so "Final" Fantasy', rating: 2, body: 'lorem ipsum', key: '3' },
    ]);

    const addReview = (review) =>{
        review.key = Math.random().toString();
        setReviews((currentReviews)=>{
            return [review, ...currentReviews]
        })
        setModalOpen(false)
    }


    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                <ImageBackground source={require('../assets/game_bg.png')} style={styles.modalContent}>
                    <MaterialIcons style={{...styles.modalToggle, ...styles.modalClose}}
                        name='close'
                        size={24}
                        onPress={() => setModalOpen(false)}
                    />
                    <ReviewForm addReview={addReview} />
                    
                </ImageBackground>
                {/* </TouchableWithoutFeedback> */}
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
        borderColor:'#000',
        padding:10,
        borderRadius:23,
        alignSelf:'center'
    },
    modalClose:{
        marginTop:20,
        marginBottom:0,

    }
})



