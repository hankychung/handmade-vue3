/**
 * 依赖收集
 * @param target
 * @param key
 */
function track(target: object, key: string | symbol) {
  console.log('track', target, key)

  // 没有通过effect调用
  if (!activeEffect) return

  // 依赖收集 -> targetMap<object, KeyToDep> -> 记录target中对应的key变化依赖项，以触发对应的effect
}

/**
 * 触发effect
 * @param target
 * @param key
 * @param newValue
 */
function trigger(target: object, key: string | symbol, newValue: any) {
  console.log('trigger', target, key, newValue)
}

/**
 * 当前激活的effect
 */
let activeEffect: ReactiveEffect | undefined

class ReactiveEffect<T = any> {
  constructor(private fn: () => T) {}

  run() {
    activeEffect = this

    return this.fn()
  }
}

/**
 * vue暴露出去的effect方法
 * @param fn
 */
function effect<T = any>(fn: () => T) {
  const _effect = new ReactiveEffect(fn)

  _effect.run()
}

export { track, trigger, effect }
