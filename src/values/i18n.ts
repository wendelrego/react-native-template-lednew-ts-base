import I18n from 'react-native-i18n'
import pt from './locale/pt'
import en from './locale/en'
import words from './words'

I18n.fallbacks = true
I18n.defaultLocale = 'pt'

I18n.translations = {
    pt,
    en
}

const translations: { [name: string]: string } = {}

words.forEach((el) => { translations[el] = I18n.t(el) })

const currentLocale = () => {
    const locale = I18n.currentLocale()
    switch (locale) {
        case 'en':
        case 'en-US':
            return 'en'
        case 'es':
        case 'und':
            return 'en'
        case 'pt-br':
            return 'pt-br'
        default:
            return 'en'
    }
}

const translate = (key: string, ...args: any) => {
    let string = translations[key]
    if (!string) return 'not_defined'
    while (string.indexOf('%s') !== -1) {
        const arg = args.shift()
        if (!arg) break
        string = string.replace('%s', arg)
    }
    return string
}

export { currentLocale, translate }
export default translations
