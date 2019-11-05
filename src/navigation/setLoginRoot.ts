import { Navigation } from 'react-native-navigation'

import screens from '../screens'

const setLoginRoot = async () => {
    await Navigation.setRoot({
        root: {
            stack: {
                id: 'stack/Login',
                children: [
                    {
                        component: {
                            name: screens.Login.name
                        }
                    }
                ]
            }
        }
    })
}

export default setLoginRoot
