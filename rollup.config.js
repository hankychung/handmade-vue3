import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: 'packages/vue/src/index.ts',
    output: [
      {
        sourcemap: true,
        // 导出地址
        file: './packages/vue/dist/vue.js',
        format: 'iife',
        name: 'Vue'
      }
    ],
    plugins: [
      typescript({
        sourceMap: true
      }),
      // 模块导入的路径补全
      nodeResolve(),
      // commonjs -> esm
      commonjs()
    ]
  }
]
