import { Dep, createDep, triggerEffects } from './dep'
import { activeEffect } from './effect'

const ref = (value: any) => {
  return new RefImpl(value)
}

class RefImpl {
  private _value: any
  private dep: Dep = createDep()
  public __v_isRef = true

  constructor(value: any) {
    this._value = value
  }

  get value() {
    if (activeEffect) {
      this.dep.add(activeEffect)
    }

    return this._value
  }

  set value(newValue: any) {
    if (this._value === newValue) return

    this._value = newValue

    triggerEffects(this.dep)
  }
}

export { ref }
