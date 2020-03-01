import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import Dropdown from './Dropdown'
import { Units } from '../assets/standardRecipes'
import { material } from 'react-native-typography'
import { Input } from 'react-native-elements'

export default function IngredientRow(props) {
    const [quantity, setQuantity] = useState('')
    const [unit, setUnit] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        props.onValueChange(props.index, {quantity, unit, name})
    })

    return (
        <View style={{flexDirection: 'row'}}>
            <Input placeholder='##' containerStyle={{width: 50}} inputStyle={material.subheading} value={quantity} onChangeText={(value) => {setQuantity(value)}} keyboardType='numeric' />
            <Dropdown placeholder='Unit' style={{width: 80}} values={Object.values(Units)} selectedValue={unit} onValueChange={setUnit} />
            <Input placeholder='Spirit' containerStyle={{flex: 1}} inputStyle={material.subheading} value={name} onChangeText={(value) => {setName(value)}} />
        </View>
    )
}