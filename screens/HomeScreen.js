import React, { useState } from 'react'
import {View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import { material } from 'react-native-typography'
import { Ionicons } from 'react-native-vector-icons'
import SmallCard from '../components/SmallCard'
import Recipes from '../assets/standardRecipes'
import styles from '../style/style'

export default function HomeScreen(props) {
    const [searchTerm, setSearchTerm] = useState('')
    const [allRecipes, setAllRecipes] = useState(Recipes.sort((a, b) => (a.title.localeCompare(b.title))))
    return (
        <View style={[styles.container, styles.statusBarPadding]}>
            <View style={{flexDirection: 'row', marginHorizontal: 30, marginBottom: 10}}>
                <Text style={material.headline}>Hey, Bartender!</Text>
                <View style={{flex: 1}}></View>
                <TouchableOpacity onPress={() => {props.navigation.navigate('About')}}>
                    <Ionicons name='ios-information-circle-outline' size={30} color='white' />
                </TouchableOpacity>
            </View>
            <Input placeholder='let me get aaaa......' containerStyle={styles.searchContainer} inputContainerStyle={styles.searchInputContainer} onChangeText={text => setSearchTerm(text)} value={searchTerm} clearButtonMode='while-editing' />
            <FlatList
                data={allRecipes.filter(item => item.title.includes(searchTerm))}
                renderItem = { ({item}) => (<TouchableOpacity onPress={()=> {props.navigation.navigate('Detail', {recipe: item})}}><SmallCard title={item.title} icon={item.icon} /></TouchableOpacity>)}
                numColumns = { 2 }
                contentContainerStyle = {{alignItems: 'center'}}
            />
        </View>
    )
}