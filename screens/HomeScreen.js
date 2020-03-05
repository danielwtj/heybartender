import React, { useState, useEffect } from 'react'
import {View, TouchableOpacity, AsyncStorage } from 'react-native'
import { ListItem } from 'react-native-elements'
import { material } from 'react-native-typography'
import recipes from '../assets/standardRecipes'
import styles from '../style/style'
import { Spirits, Methods } from '../assets/standardRecipes'

export default function HomeScreen(props) {
    //State
    const [allRecipes, setAllRecipes] = useState(recipes)
    const [customRecipes, setCustomRecipes] = useState([])
    // Saving and fetching hooks for custom recipes
    useEffect(() => {
        _fetchCustomRecipesAsync()
    }, [])
    useEffect(() => {
        if (customRecipes.length > 0) {
            _saveCustomRecipesAsync()
        }
    }, [customRecipes])
    // Async saving and fetching
    const _fetchCustomRecipesAsync = async () => {
        try {
            const value = await AsyncStorage.getItem('@heybartender/customrecipes')
            if (value !== null) {
                data = JSON.parse(value)
                data.forEach((item) => {_addRecipe(item)})
            }
        } catch (e) {
            console.warn('Error reading custom recipe data: ', e)
        }
    }
    const _saveCustomRecipesAsync = async () => {
        try {
            await AsyncStorage.setItem('@heybartender/customrecipes', JSON.stringify(customRecipes))
        } catch (e) {
            console.warn('Error saving custom recipe data.')
        }
    }
    // Adding new recipes
    // Hook to recognize new recipe
    useEffect(() => {
        if(props.navigation.state.params?.add) {
            _addRecipe(props.navigation.state.params.add)
        }
    }, [props.navigation.state.params?.add])
    // Function to add recipe to screen and save
    const _addRecipe = (recipe) => {
        setCustomRecipes([...customRecipes, recipe])
        setAllRecipes([...allRecipes, recipe])
    }
    //Render screen
    return (
        <View style={styles.container}>
            <ListItem
                Component={TouchableOpacity}
                onPress={() => {props.navigation.navigate('RecipeList', {recipes: allRecipes, title: 'A-Z Recipes'})}}
                title='A-Z Recipes'
                bottomDivider
                chevron
                containerStyle={styles.listItemCell}
                leftIcon={{name:'sort-alphabetical', type:'material-community', size: 30}}
            />
            <ListItem
                Component={TouchableOpacity}
                onPress={() => {props.navigation.navigate('CategoryFilter', {category: 'primarySpirit', options: Spirits, title: 'Drinks by Spirit', allRecipes})}}
                title='Drinks by Spirit'
                bottomDivider
                chevron
                containerStyle={styles.listItemCell}
                leftIcon={{name:'bottle-wine', type:'material-community', size: 30}}
            />
            <ListItem
                Component={TouchableOpacity}
                onPress={() => {props.navigation.navigate('CategoryFilter', {category: 'method', options: Methods, title: 'Drinks by Method', allRecipes})}}
                title='Drinks by Method'
                bottomDivider
                chevron
                containerStyle={styles.listItemCell}
                leftIcon={{name:'glass-cocktail', type:'material-community', size: 30}}
            />
            <ListItem
                Component={TouchableOpacity}
                onPress={() => {props.navigation.navigate('RecipeList', {recipes: customRecipes, title: 'My Recipes'})}}
                title='My Recipes'
                bottomDivider
                chevron
                containerStyle={styles.listItemCell}
                leftIcon={{name:'playlist-edit', type:'material-community', size: 30}}
            />
        </View>
    )
}