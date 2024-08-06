import request from '../request'
import type { ResponseType } from '@/services/request/index'

export function getHomeHotSuggests() {
  return request.get<ResponseType>({
    url: '/home/hotSuggests'
  })
}

export function getHomeCategories() {
  return request.get<ResponseType>({
    url: '/home/categories'
  })
}
