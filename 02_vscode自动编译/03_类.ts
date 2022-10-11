(() => {
  interface Person {
    firstName: string
    lastName: string
  }

  class User {
    firstName: string
    lastName: string
    fullName: string

    // 定义一个构造器
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = this.firstName + '_' + this.lastName
    }
  }

  let user = new User('诸葛', '孔明')
  console.log(user);

})()