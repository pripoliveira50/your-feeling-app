/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'

import { StatusBar, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import PublicRoutes from './routes/publicRoute'

import SplashScreen from 'react-native-splash-screen'
import { colors } from '@global/index'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>
      <NavigationContainer>
        <StatusBar backgroundColor='transparent' />
        <PublicRoutes />
      </NavigationContainer>
    </View>
  )
}

export default App
