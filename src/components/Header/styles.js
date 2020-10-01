import { StyleSheet } from 'react-native'
import { metrics } from '../../theme'

export const styles = StyleSheet.create({
  header: {
    width: metrics.screenWidth,
    height: 185,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
    paddingTop: 18
  },
  img: {
    width: 25,
    height: 25
  }
})
