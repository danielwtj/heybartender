import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Picker } from 'react-native'
import { Overlay } from 'react-native-elements'
import { material } from 'react-native-typography'
import { Ionicons } from 'react-native-vector-icons'

export default function Dropdown(props) {
    const [overlayVisible, setOverlayVisible] = useState(false)
    return (
        <View>
            <TouchableOpacity onPress={()=>{setOverlayVisible(true)}} style={[props.style, {borderBottomWidth: 1, borderBottomColor: 'gray', paddingVertical: 5, marginTop: 6, flexDirection: 'row'}]}>
                <Text style={[material.subheading, {color: props.selectedValue ? 'black' : '#BBB', flex: 1}]}>{props.selectedValue||props.placeholder}</Text>
                <Ionicons name='ios-arrow-down' size={20} color='#aaa' />
            </TouchableOpacity>
            <Overlay isVisible={overlayVisible} onBackdropPress={() => {setOverlayVisible(false)}} height='auto'>
                <Picker selectedValue={props.selectedValue} onValueChange={(value) => props.onValueChange(value)}>
                    {props.values.map((item) => (<Picker.Item value={item} label={item} key={item} />))}
                </Picker>
            </Overlay>
        </View>
    )
}