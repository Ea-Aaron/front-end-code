// 可选参数:函数在声明的时候,内部的参数使用?进行修饰,那么就表示该参数可传可不传
// 默认参数:函数在声明的时候,内部的参数有自己的默认值

// 定义一个函数:传入姓氏和名字,返回姓名(姓氏+名字=姓名)
// 需求:如果不传入任何内容,就返回默认的姓氏
// 需求:如果只传入姓氏,那么就返回姓氏
// 需求:如果传入姓氏和名字,就返回姓名

(() => {
  const getFullName = function (firstName: string = '东方', lastName?: string): string {
    // 判断名字是否传入
    if (lastName) {
      return firstName + '_' + lastName
    } else {
      return firstName
    }
  }

  console.log(getFullName());
  console.log(getFullName('诸葛'));
  console.log(getFullName('诸葛', '孔明'));
})()