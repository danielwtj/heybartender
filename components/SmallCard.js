import React from 'react'
import { View, Text, Image } from 'react-native'
import { material } from 'react-native-typography'
import drinkIcons from '../assets/drinkIcons'
import styles from '../style/style'


export default function SmallCard(props) {
    return (
        <View style={[styles.whiteRoundedBox, styles.tileSize, styles.doubleCenter, styles.dropShadow]}>
            <Image source={drinkIcons[props.icon]} style={{width: 40, height: 40, marginBottom: 10}} />
            <Text style={[material.title, {textAlign: 'center'}]}>{props.title}</Text>
        </View>
    )
}
