import { Navigation } from 'react-native-navigation'
import App from './App'

Navigation.registerComponent('screens/App', () => App)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'screens/App'
      }
    }
  })
})
