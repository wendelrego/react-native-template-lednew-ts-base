import { Platform, StyleSheet } from 'react-native'
import colors from '../../values/colors'
import SizeUtils from '../../utils/SizeUtils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Platform.select({
            ios: SizeUtils.isIphoneX() ? 56 : 24,
            android: 0
        }),
        paddingBottom: SizeUtils.isIphoneX() ? 24 : 0
    }
})

export default styles
