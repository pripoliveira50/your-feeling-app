import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  text,
  primary,
  primaryTextButton,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        primary ? styles.primaryButton : styles.whiteButton,
      ]}
      onPress={onPress}>
      <Text
        style={[
          primaryTextButton ? styles.primaryTextButton : styles.whiteTextButton,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
