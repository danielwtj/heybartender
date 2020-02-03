import React, { useState } from 'react'
import {View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import { material } from 'react-native-typography'
import { Ionicons, AntDesign } from 'react-native-vector-icons'
import SmallCard from '../components/SmallCard'
import Recipes from '../assets/standardRecipes'
import styles from '../style/style'
import FilterOverlay from '../components/FilterOverlay'

export default function HomeScreen(props) {
    const [searchTerm, setSearchTerm] = useState('')
    const [filters, setFilters] = useState({})
    const [allRecipes, setAllRecipes] = useState(Recipes.sort((a, b) => (a.title.localeCompare(b.title))))
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
    return (
        <View style={[styles.container, styles.statusBarPadding]}>
            <View style={{flexDirection: 'row', marginHorizontal: 30, marginBottom: 10}}>
                <Text style={material.headline}>Hey, Bartender!</Text>
                <View style={{flex: 1}}></View>
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
                data={allRecipes.filter((item) => _applyFilters(item))}
                renderItem = { ({item}) => (<TouchableOpacity onPress={()=> {props.navigation.navigate('Detail', {recipe: item})}}><SmallCard title={item.title} icon={item.icon} /></TouchableOpacity>)}
                numColumns = { 2 }
                contentContainerStyle = {{alignItems: 'center'}}
            />
        </View>
    )
}