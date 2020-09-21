namespace Utils {
  export function eat() {}
}

console.log(Utils);

// (function (Utils) {
//   function sayHi() { }
//   Utils.sayHi = sayHi;
//   function eat() { }
//   Utils.eat = eat;
// })(Utils || (Utils = {}));
// console.log(Utils);
