import dayjs from 'dayjs'

type dateType = dayjs.ConfigType

export function formatMonthDay(date: dateType) {
  return dayjs(date).format('MM月DD日')
}

export function getDiffDays(startDate: dateType, endDate: dateType) {
  return dayjs(endDate).diff(startDate, 'day')
}
