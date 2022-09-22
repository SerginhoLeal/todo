import { Dimensions, Platform } from 'react-native'

export default {
  colors: {
    blue: '#1E6F9F',
    white_primary: "#F2F2F2"
  },
  fonts: {
    small: Dimensions.get('screen').width * 0.15,
    showDeviceConfig: () => {
      return [
        `Device: ${Platform.OS}`,
        `Tamanho do celular: ${Dimensions.get('screen').width}`,
        `Tamanho da fonte: ${Dimensions.get('screen').width * 0.15}`
      ]
    }
  }
}