import { TouchableOpacityProps } from 'react-native'

export type ButtonProps = {
  text: string
  onPress: () => void
  primary: boolean
  primaryTextButton?: boolean
} & TouchableOpacityProps
