import { computedAsync } from '@vueuse/core'
import type { AnyObject, Btn } from '../types'
import { run } from '../utils/run'

export const useBtn = (opt?: Btn) => {
  const text = computedAsync(async () => {
    const res = await run(opt?.text)
    return res === undefined ? '' : res
  }, '')

  const display = computedAsync(async () => {
    const res = await run(opt?.display)
    return res === undefined ? true : res
  }, true)

  // const click = async data => {
  //   let res
  //   try {
  //     res = await run(opt?.onBefore, form.value)
  //   } catch (_) {
  //     return
  //   }
  //   if (res) {
  //     form.value = res
  //   }
  // }

  const onBefore = async (data: AnyObject) => {
    let res
    if (opt?.onBefore) {
      res = await run(opt?.onBefore, data)
    }
    return res || data
  }

  const onAfter = async (data: AnyObject) => {
    let res
    if (opt?.onAfter) {
      res = await run(opt?.onAfter, data)
    }
    return res || data
  }

  const onSubmit = async (data: AnyObject) => {
    let res
    if (opt?.onSubmit) {
      res = await run(opt?.onSubmit, data)
    }
    return res || data
  }

  return {
    text,
    display,
    onBefore,
    onAfter,
    onSubmit,
    style: opt?.style,
  }
}
