import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import { throttle } from 'underscore'

export type RefHTMLElementType = HTMLElement | null

export function useScroll(elRef: Ref<RefHTMLElementType>) {
  let el = document.documentElement

  const isReachBottom = ref(false)

  const scrollHeight = ref(0)
  const scrollTop = ref(0)
  const clientHeight = ref(0)

  const fn = () => {
    scrollHeight.value = el.scrollHeight
    scrollTop.value = el.scrollTop
    clientHeight.value = el.clientHeight
    console.log(
      clientHeight.value + scrollTop.value,
      Math.ceil(clientHeight.value + scrollTop.value),
      scrollHeight.value
    )
    if (Math.ceil(clientHeight.value + scrollTop.value) >= scrollHeight.value) {
      // if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log('滚动到底部了')
      isReachBottom.value = true
    }
  }

  const scrollListenerHandler = throttle(fn, 100)

  onMounted(() => {
    if (elRef) el = elRef.value!
    console.log('=========== ', el)
    el.addEventListener('scroll', scrollListenerHandler)
  })

  onUnmounted(() => {
    el.removeEventListener('scroll', scrollListenerHandler)
  })

  return { scrollHeight, scrollTop, clientHeight, isReachBottom }
}
