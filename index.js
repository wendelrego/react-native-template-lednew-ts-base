import { Navigation } from 'react-native-navigation'

import registerComponents from './src/navigation/registerComponents'
import configureReactotron from './src/utils/configureReactotron'
import setNavigationDefaultOptions from './src/navigation/setNavigationDefaultOptions'
import screens from './src/screens'
import containers from './src/containers'

Navigation.events().registerAppLaunchedListener(() => {
    configureReactotron()
    registerComponents()
    setNavigationDefaultOptions()

    console.log('here')

    Navigation.setRoot({
        root: {
            sideMenu: {
                center: {
                    stack: {
                        id: 'MainStack',
                        children: [
                            {
                                component: {
                                    name: screens.Home.name
                                }
                            }
                        ]
                    }
                },
                left: {
                    component: {
                        id: containers.MainSideMenu.name,
                        name: containers.MainSideMenu.name
                    }
                }
            }
        }
    })
})
