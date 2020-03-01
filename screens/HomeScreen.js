import React, { useState, useEffect } from 'react'
import {View, Text, FlatList, TouchableOpacity, AsyncStorage } from 'react-native'
import { Input } from 'react-native-elements'
import { material } from 'react-native-typography'
import { Ionicons, AntDesign } from 'react-native-vector-icons'
import SmallCard from '../components/SmallCard'
import recipes from '../assets/standardRecipes'
import styles from '../style/style'
import FilterOverlay from '../components/FilterOverlay'

export default function HomeScreen(props) {
    const [searchTerm, setSearchTerm] = useState('')
    const [filters, setFilters] = useState({})
    const [allRecipes, setAllRecipes] = useState(recipes)
    const [customRecipes, setCustomRecipes] = useState([])
    const [filterOverlayVisible, setFilterOverlayVisible] = useState(false)
    const _applyFilters = (item) => {
        if (!item.title.includes(searchTerm)) {
            return false
        }
        for (const key in filters) {
            if (item[key] === undefined || item[key] !== filters[key]){
                return false
            }
        }
        return true
    }
    const _addRecipe = (recipe) => {
        setCustomRecipes([...customRecipes, recipe])
        setAllRecipes([...allRecipes, recipe])
    }

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

    useEffect(() => {
        _fetchCustomRecipesAsync()
    }, [])

    useEffect(() => {
        if (customRecipes.length > 0) {
            _saveCustomRecipesAsync()
        }
    }, [customRecipes])

    useEffect(() => {
        if(props.navigation.state.params?.add) {
            _addRecipe(props.navigation.state.params.add)
        }
    }, [props.navigation.state.params?.add])

    return (
        <View style={[styles.container, styles.statusBarPadding]}>
            <View style={{flexDirection: 'row', marginHorizontal: 30, marginBottom: 10}}>
                <Text style={material.headline}>Hey, Bartender!</Text>
                <View style={{flex: 1}}></View>
                <TouchableOpacity onPress={() => {props.navigation.navigate('NewRecipe', {addRecipe: _addRecipe})}} style={{marginHorizontal: 10}}>
                    <Ionicons name='ios-add' size={30} color='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {props.navigation.navigate('About')}}>
                    <Ionicons name='ios-information-circle-outline' size={30} color='white' />
                </TouchableOpacity>
            </View>
            <View style={styles.searchFilterRow}>
                <Input placeholder='let me get aaaa......' containerStyle={[styles.searchContainer, styles.dropShadow]} inputContainerStyle={styles.searchInputContainer} onChangeText={text => setSearchTerm(text)} value={searchTerm} clearButtonMode='while-editing' />
                <TouchableOpacity onPress={() => {setFilterOverlayVisible(true)}} style={[styles.filterButton, styles.dropShadow]}>
                    <AntDesign name='filter' size={30} color='black' />
                </TouchableOpacity>
                <FilterOverlay isVisible={filterOverlayVisible} dismiss={() => {setFilterOverlayVisible(false)}} filters={filters} setFilters={setFilters} />
            </View>
            <FlatList
                data={allRecipes.filter((item) => _applyFilters(item)).sort((a, b) => (a.title.localeCompare(b.title)))}
                renderItem = { ({item}) => (<TouchableOpacity onPress={()=> {props.navigation.navigate('Detail', {recipe: item})}}><SmallCard title={item.title} icon={item.icon} /></TouchableOpacity>)}
                numColumns = { 2 }
                contentContainerStyle = {{alignItems: 'center'}}
            />
        </View>
    )
}