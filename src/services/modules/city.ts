import request from '../request'
import type { ResponseType } from '@/services/request/index';

export function getAllCity() {
  return request.get<ResponseType>({
    url: '/city/all'
  })
}
