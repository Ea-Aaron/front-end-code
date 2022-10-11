// 函数:封装了一些重复使用的代码,在需要的时候直接调用即可

(() => {
  // js中的写法
  // 函数命明,命名函数
  // function add(x, y) {
  //   return x + y
  // }

  // 函数表达式,匿名函数
  // const add2 = function (x, y) {
  //   return x + y
  // }

  // ts的写法
  // 函数命明,命名函数
  function add(x: string, y: string): string {
    return x + y
  }
  const result: string = add('111', '222')
  console.log(result);

  // 函数表达式,匿名函数
  const add2 = function (x: number, y: number): number {
    return x + y
  }
  console.log(add2(10, 20));

  // 函数的完整写法
  // add3 -----> 变量名----->函数add3
  // (x: number, y: number) => number ----->当前函数的类型
  // function (x: number, y: number): number {return x + y} -----> 符合函数类型的值
  const add3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
  }
  console.log(add3(100, 200));

})()