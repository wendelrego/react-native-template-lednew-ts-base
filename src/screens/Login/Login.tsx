import React from 'react'
import {
    View,
    Text,
    Button,
    Alert,
    ActivityIndicator
} from 'react-native'
import { Options } from 'react-native-navigation'

import styles from './styles'
import { LoginProps, LoginState } from './types'
import setAppRoot from '../../navigation/setAppRoot'
import BasicProvider from '../../services/api/providers/Basic'
import Preferences from '../../storage/preferences/Preferences'

class Login extends React.Component<LoginProps, LoginState> {
    static options: Options = {
        topBar: {
            visible: false
        }
    }

    state = {
        loading: false
    }

    goToHome = async () => {
        this.setState({ loading: true })
        try {
            const response = await BasicProvider.login('username', 'password')
            const {
                data: {
                    data: token
                }
            } = response
            Preferences.getInstance().set('token', token)
            setAppRoot()
        } catch (e) {
            Alert.alert('Um erro ocorreu')
        } finally {
            this.setState({ loading: false })
        }
    }

    render = () => {
        const { loading } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Lednew TS Base Template</Text>
                <Text style={styles.text}>Login Screen.</Text>
                <Button title={'Ir para Home'} onPress={this.goToHome} />
                {loading && <ActivityIndicator size={'small'} />}
            </View>
        )
    }
}

export default Login
