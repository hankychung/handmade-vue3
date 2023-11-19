import { Dep, createDep } from './dep'

type KeyToDep = Map<string | symbol, Dep>

const targetDepsMap: WeakMap<object, KeyToDep> = new WeakMap()

/**
 * 当前激活的effect
 */
let activeEffect: ReactiveEffect | null

/**
 * 依赖收集
 * @param target
 * @param key
 */
function track(target: object, key: string | symbol) {
  console.log('track', target, key, activeEffect)

  // 没有通过effect调用
  if (!activeEffect) return

  let depsMap = targetDepsMap.get(target)

  if (!depsMap) {
    targetDepsMap.set(target, (depsMap = new Map()))
  }

  let deps = depsMap.get(key)

  if (!deps) {
    depsMap.set(key, (deps = createDep()))
  }

  // 记录target中对应的key变化依赖项，以触发对应的effect
  deps.add(activeEffect)
}

/**
 * 触发effect
 * @param target
 * @param key
 * @param newValue
 */
function trigger(target: object, key: string | symbol, newValue: any) {
  const effects = targetDepsMap.get(target)?.get(key)

  console.log('trigger', target, key, newValue, effects)

  if (effects) {
    effects.forEach((effect) => {
      effect.trigger()
    })
  }
}

class ReactiveEffect<T = any> {
  constructor(private fn: () => T) {}

  run() {
    // 设置当前的effect, 用于访问到响应式属性时收集依赖
    activeEffect = this

    return this.fn()
  }

  trigger() {
    this.fn()
  }
}

/**
 * vue暴露出去的effect方法
 * @param fn
 */
function effect<T = any>(fn: () => T) {
  const _effect = new ReactiveEffect(fn)

  _effect.run()

  // 运行结束后置空
  activeEffect = null
}

export { track, trigger, effect, ReactiveEffect }
