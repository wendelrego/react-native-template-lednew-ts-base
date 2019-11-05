import { AppNavigationRegister } from '../types'

import Home from './Home'
import Login from './Login'

const screens: AppNavigationRegister = {
    Home: {
        name: 'screen/Home',
        component: Home
    },
    Login: {
        name: 'screen/Login',
        component: Login
    }
}

export default screens
