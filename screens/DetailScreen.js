import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { material } from 'react-native-typography'

export default function DetailScreen(props) {
    const [recipe, setRecipe] = useState(props.navigation.getParam('recipe'))
    return (
        <View style={styles.container}>
            <View style={styles.sunkenBox}>
                <Text style={material.headline}>Ingredients:</Text>
                {recipe.ingredients.map((ingredient) => <View key={ingredient.name} style={{flexDirection: 'row', alignItems: 'center'}}><Text style={material.body2}>{ingredient.quantity} {ingredient.unit} </Text><Text style={material.body1}>{ingredient.name}</Text></View>)}    
            </View>
            <View style={styles.sunkenBox}>
                <Text style={material.headline}>Instructions:</Text>
                <Text style={material.body1}>{recipe.instructions}</Text>
            </View>
        </View>
    )
}

DetailScreen.navigationOptions = ({navigation}) => ({
    title: navigation.getParam('recipe').title,
    headerStyle: {backgroundColor: '#f8debd', shadowColor: 'transparent'},
    headerTintColor: '#f8f8f2',
    headerTitleStyle: material.headlineWhite
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8debd',
    },
    sunkenBox: {
        backgroundColor: '#f8f8f2',
        margin: 15,
        borderRadius: 10,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: {width: 3, height: 3},
        shadowRadius: 3,
        shadowOpacity: 0.7,
    },
})