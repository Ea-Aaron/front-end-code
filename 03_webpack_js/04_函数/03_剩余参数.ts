// 剩余参数(rest参数)
// 剩余参数是放在函数声明时所有参数的最后
(() => {
  // ...args: string[]----->剩余的参数,都放在一个字符串的数组中,args
  function showMgs(str: string, str2: string, ...args: string[]) {
    console.log(str); // a
    console.log(str2); // b
    console.log(args); // c b d

  }

  showMgs('a', 'b', 'c', 'd', 'e')
})()