import { track, trigger } from './effect'

const mutableHandlers: ProxyHandler<object> = {
  set(target, key, newValue, receiver) {
    const isDone = Reflect.set(target, key, newValue, receiver)

    trigger(target, key, newValue)

    return isDone
  },

  get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver)

    track(target, key)

    return res
  }
}

export { mutableHandlers }
