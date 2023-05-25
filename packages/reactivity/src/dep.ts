import { ReactiveEffect } from './effect'

type Dep = Set<ReactiveEffect>

const createDep = (effects?: ReactiveEffect[]): Dep => {
  return new Set(effects)
}

export { createDep, Dep }
