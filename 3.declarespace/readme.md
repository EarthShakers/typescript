## 声明空间
- 在 TypeScript 里存在两种声明空间：类型声明空间与变量声明空间。
-  Class Foo 提供了一个类型 Foo 到类型声明空间， 此外它同样提供了一个变量 Foo 到变量声明空间，
-  var,let,const 声明的变量，仅能在变量声明空间使用，不能用作类型注解。
-  interface,type声明的类型，仅能在类型空间使用