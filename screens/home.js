import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { globalStyles } from '../styles/global'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default Home = ({ navigation }) => {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of fresh air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta, Catch them all (again)', rating: 3, body: 'lorem ipsum', key: '1' },
        { title: 'Not so "Final" Fantasy', rating: 2, body: 'lorem ipsum', key: '1' },
    ]);


    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}> {item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})



