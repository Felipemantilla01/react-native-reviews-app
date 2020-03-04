import { StyleSheet, View } from 'react-native'
import {Button, Input} from 'react-native-elements'
import React from 'react'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';

import * as yup from 'yup'


const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be number 1-5', (val)=>{
            return parseInt(val) < 6 && parseInt(val) > 0;
        })

})

const reviewForm = ({addReview}) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema = {reviewSchema}
                onSubmit={(values, actions) => {                    
                    addReview(values)                
                    actions.resetForm()
                }}
            >
                {(formikProps) => (
                    <View>
                        <Input
                            style={globalStyles.input}
                            placeholder=''
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                            label='Review title'
                            
                        />

                        <Input
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.values.body}
                            label='Review body'
                        />

                        <Input
                            style={globalStyles.input}
                            placeHolder='Rating (1-5)'
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            label='Rating (1-5)'
                            keyboardType='numeric'
                        />

                        <Button title='submit' style={{marginTop:20}} onPress={formikProps.handleSubmit} color='secondary' />

                    </View>
                )}
            </Formik>
        </View>
    )
}

export default reviewForm


