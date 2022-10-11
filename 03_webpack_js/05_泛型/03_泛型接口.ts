// 泛型接口：在定义接口时，为借口中的属性或方法定义泛型类型，在使用接口时，在指定具体的泛型类型

(() => {
  // 需求：定义一个类，用来存储用户的相关信息（id，姓名，年龄）
  // 通过一个类的实例对象调用add方法可以添加多个用户信息对象，调用getUserId方法可以根据id获取某个指定的用户信息对象

  // 定义一个泛型接口
  interface IBaseCRUD<T> {
    data: Array<T>
    add: (t: T) => T
    getUserId: (id: number | undefined) => void
  }

  // 定义一个用户信息类
  class User {
    id?: number | undefined // 用户id，表示可有可无
    name: string // 用户姓名
    age: number // 用户年龄
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  }

  // 定义一个类,可以对用户信息对象进行增删改查
  class UserCRUD implements IBaseCRUD<User> {
    // 用来保存多个User类型的用户信息对象
    data: Array<User> = []
    // 用户存储用户信息对象
    add(user: User) {
      // 生成id
      user.id = Date.now() + Math.random()
      this.data.push(user)
      return user
    }
    // 根据id进行查询
    getUserId(id: number | undefined) {
      return this.data.find(user => user.id === id)
    }
  }

  // 实例化对象
  const userCRUD = new UserCRUD()
  // 调用方法
  userCRUD.add(new User('jack', 20))
  userCRUD.add(new User('tom', 22))
  const { id } = userCRUD.add(new User('rousi', 30))
  userCRUD.add(new User('lucy', 18))
  console.log(userCRUD.data);

  console.log(userCRUD.getUserId(id));

})()