import { StyleSheet } from 'react-native'
import colors from '../../values/colors'
import Helpers from '../../utils/Helpers'
import fonts from '../../values/fonts'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.black,
        ...Helpers.fontFamily(fonts.fontWeight.bold, 18)
    }
})