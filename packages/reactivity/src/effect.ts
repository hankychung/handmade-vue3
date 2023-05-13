/**
 * 依赖收集
 * @param target
 * @param key
 */
function track(target: object, key: string | symbol) {
  console.log('track', target, key)
}

/**
 * 触发依赖
 * @param target
 * @param key
 * @param newValue
 */
function trigger(target: object, key: string | symbol, newValue: any) {
  console.log('trigger', target, key, newValue)
}

export { track, trigger }
