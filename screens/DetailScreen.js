import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { material } from 'react-native-typography'
import styles from '../style/style'

export default function DetailScreen(props) {
    const [recipe, setRecipe] = useState(props.navigation.getParam('recipe'))
    return (
        <View style={styles.container}>
            <View style={[styles.whiteRoundedBox, styles.dropShadow]}>
                <Text style={material.headline}>Ingredients:</Text>
                {recipe.ingredients.map((ingredient) => <View key={ingredient.name} style={{flexDirection: 'row', alignItems: 'center'}}><Text style={material.body2}>{ingredient.quantity} {ingredient.unit} </Text><Text style={material.body1}>{ingredient.name}</Text></View>)}    
            </View>
            <View style={[styles.whiteRoundedBox, styles.dropShadow]}>
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