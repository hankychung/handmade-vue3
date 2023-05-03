function reactive<T extends object>(target: T): T

function reactive(str: string): number

function reactive() {
  return 1
}

const a = { a: 123 }

const obj = reactive(a)

const o2 = reactive('ededasdaa')
