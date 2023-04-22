import { StyleSheet, Dimensions } from 'react-native'
import { metrics, colors } from '@global/index'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: metrics.pixel,
    paddingTop: metrics.triplePixel,
    marginBottom: metrics.triplePixel,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
  },
})

export default styles
