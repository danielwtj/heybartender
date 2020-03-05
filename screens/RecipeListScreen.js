import React, { useState } from 'react'
import {FlatList, TouchableOpacity, Button} from 'react-native'
import {ListItem, SearchBar, Icon } from 'react-native-elements'
import { material } from 'react-native-typography'
import styles from '../style/style'

export default function RecipeListScreen(props) {
    // State
    const [searchTerm, setSearchTerm] = useState('')
    // Render FlatList items
    const _renderItem = (item) => (
        <ListItem
            Component={TouchableOpacity}
            onPress={() => {props.navigation.navigate('Detail', {recipe: item})}}
            title={item.title}
            subtitle={item.primarySpirit}
            bottomDivider
            chevron
            containerStyle={styles.listItemCell}
        />
    )
    // Render screen
    return (
        <FlatList
            data={props.navigation.getParam('recipes').filter((item) => (item.title.includes(searchTerm))).sort((a, b) => a.title.localeCompare(b.title))}
            renderItem = {({item}) => (_renderItem(item))}
            ListHeaderComponent = { <SearchBar placeholder="Search by Name" value={searchTerm} onChangeText={(value) => setSearchTerm(value)} platform="ios" /> }
        />
    )
}

// Navigation options
RecipeListScreen.navigationOptions = ({navigation}) => ({
    title: navigation.getParam('title'),
    headerRight: () => (<Icon name='ios-add' type='ionicon' size={30} containerStyle={{marginRight: 10}} onPress={() => navigation.navigate('NewRecipe')} />),
})