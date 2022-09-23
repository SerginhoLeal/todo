import { Dimensions, Platform } from 'react-native'

export default {
  colors: {
    gray_100: '#F2F2F2',
    gray_200: '#D9D9D9',
    gray_300: '#808080',
    gray_400: '#333333',
    gray_500: '#262626',
    gray_600: '#1A1A1A',
    gray_700: '#0D0D0D',

    blue: '#4EA8DE',
    purple: '#8284FA',
    danger: '#E25858',
    blue_dark: '#1E6F9F',
    purple_dark: '#5E60CE',
  },
  fonts: {
    small: Dimensions.get('screen').width * 0.15,
  }
}
