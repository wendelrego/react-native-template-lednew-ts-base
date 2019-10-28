import React from 'react'
import {
    View,
    Text
} from 'react-native'
import {
    Navigation,
    Options
} from 'react-native-navigation'

import {
    HomeProps, HomeState
} from './types'
import styles from './styles'
import icons from '../../assets/icons'
import containers from '../../containers'

class Home extends React.Component<HomeProps, HomeState> {
    static options: Options = {
        topBar: {
            visible: true,
            title: {
                text: 'Home'
            },
            backButton: {
                visible: false
            },
            noBorder: true,
            leftButtons: [
                {
                    id: 'menuHamburguer',
                    icon: icons.smallMenuHamburguer
                }
            ]
        }
    }

    constructor(props: HomeProps) {
        super(props)
        Navigation.events().bindComponent(this)
    }

    // @ts-ignore
    navigationButtonPressed = ({ buttonId }) => {
        if (buttonId === 'menuHamburguer') {
            Navigation.mergeOptions(containers.MainSideMenu.name, {
                sideMenu: { left: { visible: true } }
            })
        }
    }

    render = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Lednew TS Base Template</Text>
            </View>
        )
    }
}


export default Home
