import { StyleSheet, Dimensions } from 'react-native'
import { metrics, colors } from '@global/index'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: metrics.pixel,
  },
  content: {
    flexWrap: 'wrap',
    marginBottom: metrics.doublePixel,
  },
  feelingEmoji: {
    fontSize: metrics.fiveFoldPixel + 20,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: metrics.fourFoldPixel,
    color: colors.black,
    fontWeight: 'bold',
  },
  subTitle: {
    marginTop: metrics.pixel,
    textAlign: 'center',
    fontSize: metrics.doublePixel,
    color: colors.black,
    opacity: 0.45,
    fontWeight: 'bold',
  },
  feelingText: {
    textAlign: 'center',
    fontSize: metrics.fourFoldPixel,
    color: colors.primaryDark,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  contentRate: {
    height: metrics.fiveFoldPixel * 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: metrics.triplePixel,
    marginBottom: metrics.doublePixel,
  },
})

export default styles
