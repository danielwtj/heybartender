import React, { useState } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import AboutScreen from './screens/AboutScreen'

const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Detail: {
    screen: DetailScreen,
  },
  About: {
    screen: AboutScreen,
  },
}, {
  headerMode: 'screen',
})

export default createAppContainer(MainStack)