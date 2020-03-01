import React, { useState } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import AboutScreen from './screens/AboutScreen'
import NewRecipeScreen from './screens/NewRecipeScreen'

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
  NewRecipe: {
    screen: NewRecipeScreen,
  }
}, {
  headerMode: 'screen',
})

export default createAppContainer(MainStack)