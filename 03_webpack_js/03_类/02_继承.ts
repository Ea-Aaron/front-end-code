// 继承：类与类之间的关系
// A类继承了B类，此时A类为子类，B类为基类
// 子类 -------> 派生类
// 基类 -------> 超类（父类）

(() => {
  // ts中类的定义及使用
  class Person {
    // 定义属性
    name: string
    age: number
    gender: string
    // 定义构造函数：为了将来实例化对象的时候，可以直接对属性的值进行初始化
    constructor(name: string = '小甜甜', age: number = 16, gender: string = '女') {
      // 更新对象中的属性数据
      this.name = name
      this.age = age
      this.gender = gender
    }
    // 定义实例方法
    sayHi(str: string) {
      console.log(`大家好，我是${this.name}，今年已经${this.age}，是个${this.gender}孩子，` + str);

    }
  }

  class Student extends Person {
    constructor(name: string, age: number, gender: string) {
      // 调用父类中的构造函数，使用super
      super(name, age, gender)
    }
    // 调用父类的方法
    sayHi() {
      console.log('我是student中的方法');
      super.sayHi('哈哈')
    }
  }
  // ts中使用类，实例化对象，可以直接进行初始化操作
  const person = new Person('佐助', 18, '男')
  person.sayHi('嘎嘎')
  const stu = new Student('小甜甜', 20, '女')
  stu.sayHi()
})()