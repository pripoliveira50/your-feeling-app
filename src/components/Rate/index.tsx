import React, { useMemo } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import heart from '../../assets/heart.png'
import heartOutlined from '../../assets/heart-outlined.png'

import styles from './styles'
import { RatingProps } from './types'

const Rating: React.FC<RatingProps> = ({
  rate,
  setRate,
  valueRate,
  text,
  percent,
}) => {
  const isRate = useMemo(() => (value: number) => rate >= value, [rate])
  return (
    <>
      <View style={styles.contentRate}>
        <TouchableOpacity
          onPress={() => {
            setRate(valueRate)
          }}>
          <Text
            style={
              isRate(valueRate) ? styles.labelHeart : styles.labelHearOutlined
            }>
            {percent}%
          </Text>
          <Image
            source={isRate(valueRate) ? heart : heartOutlined}
            style={
              isRate(valueRate) ? styles.heartImage : styles.heartImageOutlined
            }
          />
          <Text
            style={
              isRate(valueRate) ? styles.labelHeart : styles.labelHearOutlined
            }>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Rating
