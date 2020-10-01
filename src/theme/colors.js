const colors = {
    bg: {
      default: '#f2f2f4',
    },
    global: {
      white: '#FFFFFF',
      whiteRgb: (opacity = 1) => `rgba(256,256,256,${opacity})`,
      black: '#000',
      darktext: '#696969',
      blue: '#006CD8',
      blueRgb: (opacity = 1) => `rgba(0,108,216,${opacity})`,
      gray: '#878787',
      grayRgb: (opacity = 1) => `rgba(128,128,128,${opacity})`,
      lightGray: '#BEBEBE',
      yellow: '#FFCC00',
      green: '#00C50D',
      bgBtColor: '#006CD8'
    },
    boxAviso: {
      danger: '#FF4747',
      warning: '#F9B500',
      info: '#3F98FF',
      success: '#00C50D',
      muted: '#BEBEBE'
    }
  }
  
  export default colors
  