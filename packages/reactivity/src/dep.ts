import { ReactiveEffect } from './effect'

type Dep = Set<ReactiveEffect>

const createDep = (effects?: ReactiveEffect[]): Dep => {
  return new Set(effects)
}

const triggerEffects = (dep: Dep) => {
  dep.forEach((effect) => {
    effect.run()
  })
}

export { createDep, Dep, triggerEffects }
