- 模块化
  防止命名冲突，污染全局变量
## 1.立即执行函数
早期的可解决方案是使用立即执行函数,使用函数作用域进行隔离。
  ```
  (function(something) {
      something.foo = 123;
  })(something || (something = {}));
  ```

  ## 2.namespace
  **namespace**是EsModule还没发布时typescript提供的模块化方案，在大型项目中可以更好的组织代码,
  - 
  ```
  // index.ts
    namespace pxt{
      export function simulation(){}
    }
  // app.ts

    namespace pxt{
      export function pxtsim(){}
    }
  ```
-   现在更多的应用是声明含有子属性的全局对象
```
    declare namespace jQuery {
        function ajax(url: string, settings?: AjaxSettings): void;
    }

```
- namespace编译之后和上边的立即执行函数是一样的


## 3.现在主流的模块化规范
  - commonjs
  - esModule
虽然EsModule好用，但是实际上浏览器和node环境都支持程度有限，这也时webpack等打包工具出现的原因。

### 3.1浏览器支持模块化规范的现状：
- 仅部分支持Es Module: Relative references must start with either "/", "./", or "../
```
  <script type="module">
    import jquery from 'jquery' 
   </script>
```
- 不支持commonjs 规范和包管理工具

- webpack打包使用的是基于node环境的commonjs


