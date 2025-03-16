/* eslint-disable  */
const obj = Object.prototype.toString

/**
 * 是否函数
 * @param val 值
 * @returns bool
 */
export function isFunction(val: any): val is Function {
  return (
    obj.call(val) === '[object Function]' ||
    obj.call(val) === '[object AsyncFunction]'
  )
}

/**
 * 是否promise
 * @param val 值
 * @returns bool
 */
export function isPromise(val: any): val is Promise<any> {
  return obj.call(val) === '[object Promise]'
}
/**
 * 执行对象，获取真正的值
 * @param val 值或函数或promise
 * @param args 可传参
 * @returns promise
 *
 */
export const run = async (val: any, ...args: any): Promise<any> => {
  if (isFunction(val)) {
    const result = val(...args)
    return run(result)
  }
  if (isPromise(val)) {
    return val.then((resolvedResult: any) => run(resolvedResult))
  }
  return Promise.resolve(val)
}
