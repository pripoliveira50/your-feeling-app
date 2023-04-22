import { StyleSheet } from 'react-native'
import { metrics, colors } from '@global/index'

const styles = StyleSheet.create({
  container: {
    width: metrics.fiveFoldPixel * 8,
    height: metrics.triplePixel * 2.5,
    padding: metrics.doublePixel + 2,
    borderRadius: metrics.pixel,
    marginHorizontal: metrics.pixel,
    marginTop: metrics.fourFoldPixel,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  whiteButton: {
    backgroundColor: colors.white,
  },
  primaryTextButton: {
    textAlign: 'center',
    fontSize: metrics.doublePixel + 2,
    color: colors.primary,
    fontWeight: 'bold',
  },
  whiteTextButton: {
    textAlign: 'center',
    fontSize: metrics.doublePixel + 2,
    color: colors.white,
    fontWeight: 'bold',
  },
})

export default styles
