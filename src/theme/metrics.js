import { Dimensions, Platform } from 'react-native'
const { width, height } = Dimensions.get('window')

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350
const guidelineBaseHeight = 680

const scaleWidthF = size => (width / guidelineBaseWidth) * size
const scaleHeightF = size => (height / guidelineBaseHeight) * size

// Used via Metrics.baseMargin
const metrics = {
  WIDTH: width,
  HEIGHT: height,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  scaleWidth: scaleWidthF,
  scaleHeight: scaleHeightF,
  screenWidth: width < height ? width : height,
  screenHeight: Dimensions.get("window").height,
  navBarHeight: (Platform.OS === 'ios') ? 44 : 34,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export default metrics
