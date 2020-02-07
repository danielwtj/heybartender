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
                    {Object.values(Spirits).map((item) => <Picker.Item label={item} value={item} key={item} />)}
                </Picker>
                <Text style={material.title}>Method</Text>
                <Picker selectedValue={method} onValueChange={(value) => setMethod(value)}>
                    <Picker.Item label="**ALL**" value="" />
                    {Object.values(Methods).map((item) => <Picker.Item label={item} value={item} key={item} />)}
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