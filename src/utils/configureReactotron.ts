import Reactotron from 'reactotron-react-native'

const configureReactotron = () => {
    if (__DEV__) {
        Reactotron
            .configure()
            .useReactNative()
            .connect()
    }
}

export default configureReactotron
