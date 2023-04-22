import { TouchableOpacityProps } from 'react-native'

export type RatingProps = {
  rate: number
  setRate: (value: number) => void
  valueRate: number
  text: string
  percent: number
} & TouchableOpacityProps
