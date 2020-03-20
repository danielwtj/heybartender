import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, Image } from 'react-native'
import { material } from 'react-native-typography'
import styles from '../style/style'
import IngredientRow from '../components/IngredientRow'
import { Ionicons } from 'react-native-vector-icons'
import Dropdown from '../components/Dropdown'
import { Spirits, Methods } from '../assets/standardRecipes'
import { ButtonGroup, Divider } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as ImagePicker from 'expo-image-picker'
import drinkIcons from '../assets/drinkIcons'

export default function NewRecipeScreen(props) {
    const [drinkName, setDrinkName] = useState('')
    const [instructions, setInstructions] = useState('')
    const [ingredientRows, setIngredientRows] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [selectedIcon, setSelectedIcon] = useState()
    const [method, setMethod] = useState('')
    const [primarySpirit, setPrimarySpirit] = useState('')
    const [drinkImage, setDrinkImage] = useState(null)
    const _makeRecipeObject = () => {
        return {
            title: drinkName,
            method: method,
            primarySpirit: primarySpirit,
            icon: Object.keys(drinkIcons)[selectedIcon],
            image: drinkImage,
            instructions: instructions,
            ingredients: ingredients,
            key: drinkName,
            isCustom: true,
        }
    }
    const _saveRecipeObject = () => {
        props.navigation.navigate('Home', {add:_makeRecipeObject()})
    }

    const _addIngredient = () => {
        const index = ingredientRows.length
        setIngredientRows([...ingredientRows, <IngredientRow key={index} index={index} onValueChange={_updateIngredient}/>])
    }

    const _updateIngredient = (index, ingredient) => {
        setIngredients((prev) => {
            const result = [...prev]
            result[index] = ingredient
            return result
        })
    }
    const _openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()
        if (permissionResult === false) {
            alert('Permission to access your camera roll is required for this feature. Please visit Settings and grant camera roll permissions.')
            return
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync()
        if (pickerResult.cancelled === true)
            return
        setDrinkImage({uri: pickerResult.uri})
    }
    useEffect(() => {
        props.navigation.setParams({save: _saveRecipeObject})
    },[drinkName, method, primarySpirit, selectedIcon, instructions, ingredientRows])
    return (
        <KeyboardAwareScrollView>
            <View style={{paddingHorizontal: 20}}>
                <Text style={material.headline}>Drink Name:</Text>
                <TextInput placeholder='Drink Name' value={drinkName} onChangeText={(value) => {setDrinkName(value)}} style={material.subheading}/>
            </View>
            <Divider style={{marginVertical: 10}}/>
            <View style={{paddingHorizontal: 20}}>
                <Text style={material.headline}>Metadata:</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={material.subheading}>Primary Spirit</Text>
                    <View style={{flex: 1}}></View>
                    <Dropdown values={Object.values(Spirits)} style={{width: 150}} placeholder='Select' selectedValue={primarySpirit} onValueChange={setPrimarySpirit} />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={material.subheading}>Method of Prep</Text>
                    <View style={{flex: 1}}></View>
                    <Dropdown values={Object.values(Methods)} style={{width: 150}} placeholder='Select' selectedValue={method} onValueChange={setMethod} />
                </View>
                <Text style={material.subheading}>Drink Icon</Text>
                <ButtonGroup
                    buttons = {Object.values(drinkIcons).map((source) => <Image source={source} style={{width: 20, height: 20}} />)}
                    selectedIndex = {selectedIcon}
                    onPress = {setSelectedIcon}
                />
                <Text style={material.subheading}>Drink Image</Text>
                <TouchableOpacity onPress={() => {_openImagePickerAsync()}}>
                    <Image source={drinkImage || require('../assets/comingsoon.jpg')} style={{width:150, height: 100, alignSelf: 'flex-end'}} />
                </TouchableOpacity>
            </View>
            <Divider style={{marginVertical: 10}}/>
            <View style={{paddingHorizontal: 20}}>
                <Text style={material.headline}>Ingredients:</Text>
                {ingredientRows}
                <View style={{flexDirection:'row-reverse', marginTop: 10}}>
                    <TouchableOpacity onPress={() => {_addIngredient()}}>
                        <Ionicons name='ios-add-circle-outline' size={30} color='gray' />
                    </TouchableOpacity>
                </View>
            </View>
            <Divider style={{marginVertical: 10}}/>
            <View style={{paddingHorizontal: 20}}>
                <Text style={material.headline}>Instructions:</Text>
                <TextInput
                    multiline
                    numberOfLines = {4}
                    value = {instructions}
                    onChangeText = {(value) => {setInstructions(value)}}
                    style = {[material.body1, {minHeight: 80, maxHeight: 120}]}
                    textAlignVertical = 'top'
                    placeholder = 'Type your instructions here'
                />
            </View>
        </KeyboardAwareScrollView>
    )
}

NewRecipeScreen.navigationOptions = ({navigation}) => ({
    title: 'New Recipe',
    headerTitleStyle: material.headline,
    headerRight: () => (
        <Button
            onPress = {() => {navigation.getParam('save')()}}
            title = 'Save'
        />
    )
})