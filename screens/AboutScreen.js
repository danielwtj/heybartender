import React from 'react'
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Linking } from 'expo'
import { material } from 'react-native-typography'
import styles from '../style/style'

export default function AboutScreen(props) {
    return (
        <ScrollView style={[styles.container, {paddingHorizontal: 15}]}>
            <Text style={material.display1}>Hey, Bartender!</Text>
            <Text style={[material.title,{marginBottom: 15}]}>App Created by Daniel Thompson</Text>
            <Text style={material.subheading}>Privacy Policy:</Text>
            <Text style={material.body2}>Plain and Simple</Text>
            <Text style={material.body1}>"Hey, Bartender!" in its present form does not collect any personally identifiable information about its users. All recipes are stored on your device and no log in is required to use the app. We will update this Privacy Policy in the case that any future features require the collection of your data.</Text>
            <Text style={material.body2}>Third-party Software</Text>
            <Text style={material.body1}>"Hey, Bartender!" is built with Expo SDK, which gives the ability to offer minor updates over-the-air.</Text>
            <TouchableOpacity onPress={() => {Linking.openURL('https://bit.ly/2RdS547')}}><Text style={material.body1}>View Expo's Privacy Policy here</Text></TouchableOpacity>
            <Text style={material.body2}>Beta Testers</Text>
            <Text style={material.body1}>If you are invited to beta test future versions of this application and you accept that invitation, your Full Name and Email Address will be connected to your Application usage for testing and development purposes only. Apple's TestFlight beta software will collect information about your device, Application usage, crash reports, and any screenshots or feedback you elect to share with us.</Text>
            <Text style={[material.subheading,{marginTop: 15}]}>Credits:</Text>
            <Text style={material.body1}>Drink icons made by FreePik from flaticon.com</Text>
        </ScrollView>
    )
}

AboutScreen.navigationOptions = ({navigation}) => ({
    headerStyle: {backgroundColor: '#f8debd', shadowColor: 'transparent'},
    headerTintColor: '#f8f8f2',
    headerTitleStyle: material.headlineWhite
})