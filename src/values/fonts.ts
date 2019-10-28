import { Platform } from 'react-native'

const fonts = {
    fontWeight: {
        thin: '100',
        ultraLight: '200',
        light: '300',
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        heavy: '800',
        black: '900'
    },
    fontFamily: {
        default: Platform.OS === 'ios' ? 'SF Pro Display' : 'Product'
    }
}

export default fonts
