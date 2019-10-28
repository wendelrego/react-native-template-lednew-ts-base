import { Navigation } from 'react-native-navigation'
import { Options } from 'react-native-navigation/lib/src/interfaces/Options'

import fonts from '../values/fonts'
import colors from '../values/colors'

const setNavigationDefaultOptions = () => {
    const options: Options = {
        topBar: {
            title: {
                fontFamily: fonts.fontFamily.default
            },
            background: {
                color: colors.background
            },
            elevation: 0
        },
        layout: {
            orientation: ['portrait']
        },
        sideMenu: {
            // @ts-ignore
            animationType: 'door'
        }
    }
    Navigation.setDefaultOptions(options)
}

export default setNavigationDefaultOptions
