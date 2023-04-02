## @rollup/plugin-node-resolve

- 它的作用是告诉 Rollup 如何处理在代码中使用的导入语句（例如 import 和 require）。
- 具体来说，rollup-plugin-node-resolve 会解析导入语句中使用的模块名称，并在你的项目依赖中寻找对应的文件。这样，你就可以在你的代码中使用 import 或 require 来引用其他模块，而不必担心路径问题。
- 例如，如果你的项目依赖中有一个叫做 "lodash" 的模块，你可以在代码中使用 import \_ from 'lodash' 来引用它。rollup-plugin-node-resolve 会帮你找到 lodash 模块的位置，并将它包含到你的代码中。
- 总之，rollup-plugin-node-resolve 插件的作用是帮助你在 Rollup 中处理模块依赖，使得你可以在代码中使用 import 或 require 语句来引用其他模块。

## @rollup/plugin-commonjs

- 一些库暴露了可以按照原样导入的 ES 模块——the-answer 就是这样的一种模块。但目前，大多数的 NPM 包暴露的都是 CommonJS 模块。在此更改之前，我们需要将 CommonJS 转换为 ES2015，这样 Rollup 才能处理它们。
- @rollup/plugin-commonjs 可以做到这一点。
- 请注意，@rollup/plugin-commonjs 应该在其他插件 之前 使用——这是为了防止其他插件进行的更改破坏了 CommonJS 检测。
