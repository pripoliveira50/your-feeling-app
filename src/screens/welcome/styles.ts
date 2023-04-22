import { StyleSheet } from 'react-native'
import { metrics, colors } from '@global/index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: metrics.triplePixel,
    textAlign: 'center',
    color: colors.white,
    fontWeight: '500',
    marginBottom: metrics.triplePixel,
  },
  image: {
    width: metrics.fiveFoldPixel * 4,
    resizeMode: 'contain',
  },
})

export default styles
