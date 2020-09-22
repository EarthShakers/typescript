- 命名空间 
  防止命名冲突
## 1.立即执行函数
早期的可解决方案是使用立即执行函数,使用函数作用域进行隔离。
  ```
  (function(something) {
      something.foo = 123;
  })(something || (something = {}));
  ```
## 2.模块化
  - commonjs
  - esModule
虽然EsModule好用，但是实际上浏览器和node环境都支持程度有限，这也时webpack等打包工具出现的原因。

### 2.1浏览器支持模块化规范的现状：
- 仅部分支持Es Module: Relative references must start with either "/", "./", or "../
```
  <script type="module">
    import jquery from 'jquery' 
   </script>
```
- 不支持commonjs 规范和包管理工具

### 2.2为什么浏览器至今都不支持?
