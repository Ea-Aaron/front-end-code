// 修饰符（类中成员的修饰符）：主要是描述类中的成员（属性、构造函数、方法）的可访问性
// 类中的成员都有自己的默认的访问修饰符，public
// public修饰符，类中的成员默认的修饰符，代表的是公共的，任何位置都可以访问类中成员
// private修饰符,使用private修饰符,外部的成员无法访问到这个成员,包括子类也无法访问
// protected修饰符,外部的成员无法访问到这个成员,但是子类可以访问,子类的实例化对象也无法访问

(() => {
  class Person {
    // public 修饰符
    // public name: string
    // private 修饰符
    // private name: string
    // protected 修饰符
    protected name: string
    public constructor(name: string) {
      this.name = name
    }
    public eat() {
      console.log('嗯,这个骨头真好吃', this.name);

    }
  }

  // 子类
  class Student extends Person {
    constructor(name: string) {
      super(name)
    }
    play() {
      console.log('这个好甜', this.name);

    }
  }

  // 实例化
  const per = new Person('大蛇丸')
  per.eat()
  // console.log(per.name);
  const stu = new Student('红豆')
  stu.play()
  // console.log(stu.name);

})()