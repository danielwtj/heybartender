import React from 'react'
import {FlatList, TouchableOpacity} from 'react-native'
import {ListItem, SearchBar } from 'react-native-elements'
import { material } from 'react-native-typography'
import styles from '../style/style'

export default function CategoryFilterScreen(props) {
    // Return array of recipes filtered for given category
    const _applyFilter = (category, value) => (
        props.navigation.getParam('allRecipes').filter((item) => item[category] === value)
    )
    // Render FlatList items
    const _renderItem = (item) => (
        <ListItem
            Component={TouchableOpacity}
            onPress={() => {props.navigation.navigate('RecipeList', {recipes: _applyFilter(props.navigation.getParam('category'), item), title: `${item} Drinks`})}}
            title={item}
            bottomDivider
            chevron
            containerStyle={styles.listItemCell}
        />
    )
    // Render screen
    return (
        <FlatList
            data={Object.values(props.navigation.getParam('options'))}
            renderItem = {({item}) => (_renderItem(item))}
            keyExtractor = {(index) => (index.toString())}
        />
    )
}

// Navigation options
CategoryFilterScreen.navigationOptions = ({navigation}) => ({
    title: navigation.getParam('title')
})