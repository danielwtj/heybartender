import React, { useState } from 'react'
import { View, Text, Picker} from 'react-native'
import { Overlay, Button } from 'react-native-elements'
import styles from '../style/style'
import { material } from 'react-native-typography'
import { Spirits, Methods } from '../assets/standardRecipes'

export default function FilterOverlay(props) {
    const [primarySpirit, setPrimarySpirit] = useState(props.filters.primarySpirit)
    const [method, setMethod] = useState(props.filters.method)

    return (
        <Overlay isVisible={props.isVisible} onBackdropPress={props.dismiss}>
            <View>
                <Text style={material.display1}>Filter By:</Text>
                <Text style={material.title}>Primary Spirit</Text>
                <Picker selectedValue={primarySpirit} onValueChange={(value) => {setPrimarySpirit(value)}}>
                    <Picker.Item label="**ALL**" value="" />
                    <Picker.Item label="Vodka" value="vodka" />
                    <Picker.Item label="Gin" value="gin" />
                    <Picker.Item label="Tequila" value="tequila" />
                    <Picker.Item label="Mezcal" value="mezcal" />
                    <Picker.Item label="Whiskey" value="whiskey" />
                    <Picker.Item label="Rum" value="rum" />
                    <Picker.Item label="Aperitif" value="aperitif" />
                    <Picker.Item label="Brandy" value="brandy" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
                <Text style={material.title}>Method</Text>
                <Picker selectedValue={method} onValueChange={(value) => setMethod(value)}>
                    <Picker.Item label="**ALL**" value="" />
                    <Picker.Item label="Shaken" value="shaken" />
                    <Picker.Item label="Stirred" value="stirred" />
                    <Picker.Item label="Built" value="built" />
                </Picker>
                <Button raised title='APPLY' onPress={() => {
                    props.setFilters(
                        {
                            ...(primarySpirit && {'primarySpirit': primarySpirit}),
                            ...(method && {'method': method})
                        }
                    )
                    props.dismiss()
                }}/>
            </View>
        </Overlay>
    )
}