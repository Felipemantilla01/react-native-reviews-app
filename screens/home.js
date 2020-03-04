import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements';
import { globalStyles } from '../styles/global'
import { TouchableOpacity } from 'react-native-gesture-handler';


import Card from '../shared/card'

export default Home = ({ navigation }) => {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of fresh air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta, Catch them all (again)', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'Not so "Final" Fantasy', rating: 2, body: 'lorem ipsum', key: '3' },
    ]);


    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
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

})



