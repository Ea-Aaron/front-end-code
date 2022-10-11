function fn1(a, b, c) {
  console.log('this', this);
  console.log(a, b, c);
  return 'this is fn1';
}

// @ts-ignore
Function.prototype.bind1 = function() {
  // 将参数转为数组
  let args = Array.prototype.slice.call(arguments);
  // 获取this
  let t = args.shift();
  // 获取实例对象,此时this就是调用的对象
  let self = this;
  // bind返回的是一个函数
  return function() {
    return self.apply(t, args);
  };
};

// @ts-ignore
const fn2 = fn1.bind1({ x: 100 }, 10, 20, 30);
const res = fn2();
console.log(res);