import {
    Dimensions,
    Platform,
    PixelRatio,
    StatusBar
} from 'react-native'

const dimension = Dimensions.get('window')
const { width: SCREEN_WIDTH } = dimension
const scale = SCREEN_WIDTH / 320

class SizeUtils {
    static getImageHeight = (imgW: number, imgH: number, newW: number) => (newW * imgH) / imgW

    static getPaddingTop = (
        skipAndroid: boolean = false,
        androidHeight: number = 0
    ) => Platform.select({
        ios: SizeUtils.isIphoneX() ? 44 : 20,
        android: skipAndroid ? 0 : androidHeight || StatusBar.currentHeight
    })

    static getListBottomPadding = () => Platform.select({
        ios: SizeUtils.isIphoneX() ? 40 : 16,
        android: 16
    })

    static isIphoneX = () => (
        Platform.OS === 'ios'
        && !Platform.isPad
        && !Platform.isTVOS
        && (dimension.height >= 812 || dimension.width >= 812)
    )

    static isIphone5S = () => (
        Platform.OS === 'ios'
        && !Platform.isPad
        && !Platform.isTVOS
        && (dimension.height === 1136 || dimension.width === 640)
    )

    static normalize = (size: number, max?: number, iPhoneXSize?: number) => {
        const newSize = size * scale
        if (Platform.OS === 'ios') {
            if (SizeUtils.isIphoneX() && iPhoneXSize) return iPhoneXSize
        }
        let result = Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
        if (max && result > max) result = max
        return result
    }
}

export default SizeUtils
