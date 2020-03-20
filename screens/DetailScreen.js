import React from 'react'
import { View, Text, Image, Dimensions, Button } from 'react-native'
import { material } from 'react-native-typography'
import styles from '../style/style'
import { Divider } from 'react-native-elements'

export default function DetailScreen(props) {
    const recipe = props.navigation.getParam('recipe')
    return (
        <View style={styles.container}>
            <Image source={recipe.image || require('../assets/comingsoon.jpg')} style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width*.66}} />
            <View style={{paddingHorizontal: 20}}>
                <Text style={material.headline}>Ingredients:</Text>
                {recipe.ingredients.map((ingredient) => <View key={ingredient.name} style={{flexDirection: 'row', alignItems: 'center'}}><Text style={material.body2}>{ingredient.quantity} {ingredient.unit} </Text><Text style={material.body1}>{ingredient.name}</Text></View>)}    
            </View>
            <Divider style={{marginVertical: 10}}/>
            <View style={{paddingHorizontal: 20}}>
                <Text style={material.headline}>Instructions:</Text>
                <Text style={material.body1}>{recipe.instructions}</Text>
            </View>
        </View>
    )
}

DetailScreen.navigationOptions = ({navigation}) => ({
    title: navigation.getParam('recipe').title,
    headerRight: () => {
        return navigation.getParam('recipe').isCustom ? <Button title='Delete' onPress={()=>{navigation.navigate('Home', {delete: navigation.getParam('recipe')})}} /> : null
    }
})