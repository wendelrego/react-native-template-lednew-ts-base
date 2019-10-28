import moment from 'moment'
import { translate } from '../values/i18n'

export enum DateDiffType {
    day = 1,
    hour = 2,
    minute = 3,
    second = 4
}

class DateUtils {
    static differenceInDays = (compare: Date, today: Date = new Date()) => {
        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24

        const date1Ms = compare.getTime()
        const date2Ms = today.getTime()

        // Calculate the difference in milliseconds
        const differenceMs = date2Ms - date1Ms

        // Convert back to days and return
        const dayDiff = Math.floor(differenceMs / day)
        if (dayDiff >= 3) return { option: 0, diff: dayDiff }
        if (dayDiff > 0 && dayDiff < 3) return { option: 1, diff: dayDiff }

        const hourDiff = Math.floor(differenceMs / hour)
        if (hourDiff > 0) return { option: 2, diff: hourDiff }

        const minuteDiff = Math.floor(differenceMs / minute)
        if (minuteDiff > 0) return { option: 3, diff: minuteDiff }

        const secondsDiff = Math.floor(differenceMs / second)
        return { option: 4, diff: secondsDiff }
    }

    static differenceInYears = (compare: Date, today: Date = new Date()) => {
        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const year = hour * 24 * 365

        const date1Ms = compare.getTime()
        const date2Ms = today.getTime()

        // Calculate the difference in milliseconds
        const differenceMs = date2Ms - date1Ms

        const yearsDiff = Math.floor(differenceMs / year)

        return { option: 0, diff: yearsDiff }
    }

    static translateDate = (date: Date) : string => {
        let dateString = ''

        const { diff, option } = DateUtils.differenceInDays(date)

        console.log(diff, option)

        if (option === DateDiffType.second) {
            if (diff === 1) {
                dateString = translate('x_second_ago', diff)
            } else {
                dateString = translate('x_seconds_ago', diff)
            }
        }

        if (option === DateDiffType.minute) {
            if (diff === 1) {
                dateString = translate('x_minute_ago', diff)
            } else {
                dateString = translate('x_minutes_ago', diff)
            }
        }

        if (option === DateDiffType.hour) {
            if (diff === 1) {
                dateString = translate('x_hour_ago', diff)
            } else {
                dateString = translate('x_hours_ago', diff)
            }
        }

        if (option === DateDiffType.day) {
            if (diff === 0) {
                dateString = translate('today_at_x', moment(date).format('HH:mm'))
            }
            if (diff === 1) {
                dateString = translate('yesterday_at_x', moment(date).format('HH:mm'))
            }
            if (diff > 1) {
                dateString = translate('x_days_ago', diff)
            }
        }

        return dateString
    }
}

export default DateUtils
