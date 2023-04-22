import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import RateFeellings from '../screens/rateFeelings'
import Welcome from '../screens/welcome'

const Stack = createNativeStackNavigator()

const PublicRoute = () => (
  <Stack.Navigator
    initialRouteName='Welcome'
    screenOptions={{ gestureEnabled: false, header: () => null }}>
    <Stack.Screen name='Welcome' component={Welcome} />
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='RateFeellings' component={RateFeellings} />
  </Stack.Navigator>
)

export default PublicRoute
