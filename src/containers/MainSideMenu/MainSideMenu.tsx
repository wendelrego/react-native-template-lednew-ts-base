import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

import styles from './styles'
import Preferences from '../../storage/preferences/Preferences'
import setLoginRoot from '../../navigation/setLoginRoot'

const logout = async () => {
    Preferences.getInstance().set('token', null)
    setLoginRoot()
}

const MainSideMenu = () => (
    <View style={styles.container}>
        <Text>MainSideMenu</Text>
        <Button title={'Logout'} onPress={logout} />
    </View>
)

export default MainSideMenu
