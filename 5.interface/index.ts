//有时候我们希望一个接口允许有任意的属性，可以使用如下方式定义接口：
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  name: "Tom",
  gender: "male",
};
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface User {
  name: string;
  age?: number;
  [propName: string]: string;
}

let seven: User = {
  name: "Tom",
  age: 25,
  gender: "male",
};
// 只读属性 初始化后不可更改
interface Student {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let rose: Student = {
  id: 12,
  name: "rose",
  gender: "famale",
};

rose.id = 89757;
