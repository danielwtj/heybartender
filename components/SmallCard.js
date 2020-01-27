import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { material } from 'react-native-typography'
import drinkIcons from '../assets/drinkIcons'



export default function SmallCard(props) {
    return (
        <View style={styles.box}>
            <Text style={[material.title, {textAlign: 'center'}]}>{props.title}</Text>
            <Image source={drinkIcons[props.icon]} style={{width: 40, height: 40, marginBottom: 10}} />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#f8f8f2',
        borderRadius: 10,
        width: Dimensions.get('window').width * .4,
        height: Dimensions.get('window').width * .4,
        margin: 10,
        shadowColor: '#ccc',
        shadowOffset: {width: 3, height: 3},
        shadowRadius: 3,
        shadowOpacity: 0.7,
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    }
})