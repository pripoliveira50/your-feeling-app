import { StyleSheet } from 'react-native'
import { metrics, colors } from '@global/index'

const styles = StyleSheet.create({
  contentRate: {
    justifyContent: 'center',
    paddingHorizontal: metrics.doublePixel,
    marginVertical: metrics.doublePixel,
  },
  labelHearOutlined: {
    textAlign: 'center',
    fontSize: metrics.pixel + 6,
    color: colors.black,
    fontWeight: '500',
    opacity: 0.8,
    paddingHorizontal: metrics.doublePixel + 4,
  },
  labelHeart: {
    textAlign: 'center',
    fontSize: metrics.doublePixel,
    color: colors.primaryDark,
    opacity: 1,
    fontWeight: 'bold',
    paddingHorizontal: metrics.doublePixel + 4,
  },
  heartImageOutlined: {
    marginTop: metrics.pixel,
    width: metrics.fourFoldPixel,
    alignSelf: 'center',
    height: metrics.fourFoldPixel,
    resizeMode: 'contain',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heartImage: {
    marginTop: metrics.pixel,
    width: metrics.fourFoldPixel + 5,
    alignSelf: 'center',
    height: metrics.fourFoldPixel + 5,
    resizeMode: 'contain',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default styles
