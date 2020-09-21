## 模块路径
- 当导入路径不是相对路径时，模块解析将会模仿 Node 模块解析策略

- 当使用`import somevarible from 'someplace'`时，会从当前文件同级的`node_modules`开始查找`someplace.ts`，入果没有，会继续向上一级目录下的`node_mnodules`中查找，直到根目录，仍未找到就会报错
- 如果`someplace`是文件夹时，会先查找该文件下的`index.ts`
- 否则，查找该文件夹下的`package.json中main属性指定的文件`，通常第三发包都是以这种模块路径解析查找。


