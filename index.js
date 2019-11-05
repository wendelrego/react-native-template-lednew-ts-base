import { Navigation } from 'react-native-navigation'

import registerComponents from './src/navigation/registerComponents'
import configureReactotron from './src/utils/configureReactotron'
import setNavigationDefaultOptions from './src/navigation/setNavigationDefaultOptions'
import Preferences from './src/storage/preferences/Preferences'
import API from './src/services/api/API'
import setAppRoot from './src/navigation/setAppRoot'
import setLoginRoot from './src/navigation/setLoginRoot'

Navigation.events().registerAppLaunchedListener(async () => {
    configureReactotron()
    registerComponents()
    setNavigationDefaultOptions()

    await Preferences.init()

    const token = Preferences.getInstance().get('token')

    if (token) {
        API.setToken(token)
        await setAppRoot()
    } else {
        await setLoginRoot()
    }
})
