// 抽象类:包含抽象方法(抽象方法一般没有任何的具体内容的实现),也可以包含实例方法,抽象类不能被实例化,为了让子类实行实例化及实现内部的抽象方法
// 抽象类的目的或者作用是为了子类服务的

(() => {
  abstract class Animal {
    // 抽象方法
    abstract eat(): void
    // 抽象方法不能有具体的实现
    // abstract eat() { 
    //   console.log('怎么吃');

    // }

    // 实例方法
    sayHi() {
      console.log('你好!');

    }
  }

  // 子类
  class Dog extends Animal {
    // 重新实现抽象类中方法,此时这个方法就是当前dog的实例方法
    eat() {
      console.log('舔着吃,真好吃');

    }
  }

  // 不能实例化抽象对象
  // const ani = new Animal()

  const dog = new Dog()
  dog.eat()
})()