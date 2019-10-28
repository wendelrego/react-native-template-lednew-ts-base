import { Navigation } from 'react-native-navigation'

import screens from '../screens'
import containers from '../containers'

const componentsToRegister = {
    ...screens,
    ...containers
}

const registerComponents = () => {
    Object.values(componentsToRegister).forEach(({ name, component }) => {
        Navigation.registerComponent(name, () => component)
    })
}

export default registerComponents
