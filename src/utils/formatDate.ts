import dayjs from 'dayjs'

export type dateType = dayjs.ConfigType

export function formatMonthDay(date: dateType, formatStr = 'MM月DD日') {
  return dayjs(date).format(formatStr)
}

export function getDiffDays(startDate: dateType, endDate: dateType) {
  return dayjs(endDate).diff(startDate, 'day')
}
