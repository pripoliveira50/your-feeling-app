import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { View, Text, Image } from 'react-native'

import Button from '@components/Button'

import welcome from '../../assets/welcome.png'

import styles from './styles'

const Welcome = () => {
  const navigation = useNavigation()

  function navigate() {
    navigation.navigate('Home')
  }

  return (
    <>
      <View style={styles.container}>
        <Image source={welcome} style={styles.image} />
        <Text style={styles.title}>Welcome, shall we begin?</Text>
        <Button
          onPress={() => navigate()}
          primaryTextButton
          text={'Go'}
          primary={false}
        />
      </View>
    </>
  )
}

export default Welcome
