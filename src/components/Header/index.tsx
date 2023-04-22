import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'
import { HeaderProps } from './types'

const Header: React.FC<HeaderProps> = ({
  title,
  back,
  backWhite,
  primary,
  onPress,
}) => {
  return (
    <View
      style={[
        styles.container,
        primary ? styles.primaryColor : styles.whiteColor,
      ]}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            styles.buttonContainer,
            backWhite ? styles.backWhite : styles.backBlack,
          ]}>
          {back}
        </Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.whitetitle}>{title}</Text>
      </View>
    </View>
  )
}

export default Header
