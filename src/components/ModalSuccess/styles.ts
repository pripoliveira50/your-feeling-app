import { StyleSheet } from 'react-native'
import { colors, metrics } from '@global/index'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: metrics.doublePixel,
  },
  screenContainer: {
    backgroundColor: 'rgba(96, 72, 201,0.2)',
  },
  headerText: {
    fontSize: metrics.doublePixel + 4,
    color: colors.primaryDark,
    lineHeight: metrics.fourFoldPixel,
    textAlign: 'center',
    alignItems: 'center',
  },
  subHeaderText: {
    fontSize: metrics.doublePixel,
    color: colors.black,
    opacity: 0.8,
    lineHeight: metrics.triplePixel,
    textAlign: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: metrics.doublePixel,
    marginBottom: metrics.doublePixel,
    color: colors.primaryLight,
    marginHorizontal: 20,
    textAlign: 'center',
    alignItems: 'center',
  },

  imgSucess: {
    alignItems: 'center',
    alignSelf: 'center',
  },

  onClosed: {
    marginVertical: metrics.triplePixel,
  },
  stretchLogo: {
    width: metrics.fiveFoldPixel * 4,
    resizeMode: 'contain',
  },
})

export default styles
