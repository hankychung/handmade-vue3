import { Dep, createDep, triggerEffects } from './dep'
import { activeEffect } from './effect'
import { toReactive } from './reactive'

const ref = (value: any) => {
  return createRef(value)
}

function isRef(v: any): v is RefImpl {
  return v && v.__v_isRef === true
}

function createRef(value: any, isShallow?: boolean) {
  if (isRef(value)) {
    return value
  }

  return new RefImpl(value, isShallow)
}

class RefImpl {
  private _value: any
  private dep: Dep = createDep()

  public __v_isRef = true

  constructor(value: any, private readonly __v_isShallow?: boolean) {
    this._value = value
  }

  get value() {
    if (activeEffect) {
      this.dep.add(activeEffect)
    }

    return this.__v_isShallow ? this._value : toReactive(this._value)
  }

  set value(newValue: any) {
    if (this._value === newValue) return

    this._value = newValue

    triggerEffects(this.dep)
  }
}

export { ref }
