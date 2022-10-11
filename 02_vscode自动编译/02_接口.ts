(() => {
  // 定义一个接口
  interface Person {
    firstName: string // 姓名
    lastName: string
  }

  function getter(person: Person) {
    return 'hello,' + person.firstName + '' + person.lastName
  }

  let user = {
    firstName: '诸葛',
    lastName: '孔明'
  }

  console.log(getter(user));

})()