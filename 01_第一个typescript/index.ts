(() => {
  // 这个str是 string 类型的
  function showperson(str: string) {
    return str + 'ceshi'
  }

  let person = 'hello'
  console.log(showperson(person));

})()

/* 
  如果ts文件中有了ts的语法，需要把ts文件编译为js文件，在html中引入js文件使用
  ts文件中的函数的形参，如果使用了某个类型进行修饰，那么最终在编译的js文件中是没有显示这个类型
  ts文件中的变量使用let声明，编译之后的js文件会编译为var
*/