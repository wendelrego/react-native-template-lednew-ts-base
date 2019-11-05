// @ts-ignore
import SyncStorage from 'sync-storage'

class Preferences {
    private static instance: Preferences

    static init = async () => {
        await SyncStorage.init()
        Preferences.instance = new Preferences()
        return Preferences.instance
    }

    static getInstance = (): Preferences => {
        if (!Preferences.instance) {
            console.warn('You need to init the preferences before using it')
        }
        return Preferences.instance
    }

    get = (key: string): any => SyncStorage.get(key)
    set = (key: string, data: any) => SyncStorage.set(key, data)
}

export default Preferences
