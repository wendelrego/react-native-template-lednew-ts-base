import { Navigation } from 'react-native-navigation'

import screens from '../screens'
import containers from '../containers'

const setAppRoot = async () => {
    await Navigation.setRoot({
        root: {
            sideMenu: {
                center: {
                    stack: {
                        id: 'stack/Main',
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
}

export default setAppRoot
