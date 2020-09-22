(function (something) {
  something.foo = 123;
})(something || (something = {}));

console.log(something);
