// 类 类型：类的类型，类的类型额可以通过接口来实现
(() => {
  // 定义一个接口
  interface IFly {
    // 该方法没有任何的实现（方法中什么都没有）
    fly(): void
  }

  // 定义一个类，这个类的类型就是上面定义的接口（实际上也可以理解为，IFly接口约束了当前这个类）
  class Person implements IFly {
    // 实现接口中的方法
    fly(): void {
      console.log('这是person类中的fly方法');

    }
  }

  // 实例化对象
  const person = new Person()
  person.fly()

  // 定义一个接口
  interface ISwim {
    swim(): void
  }

  // 定义一个类，这个类的类型就是IFly和ISwim（当前这个类可以实现多个接口，一个类同时也可以呗多个接口进行约束）
  class Person2 implements IFly, ISwim {
    fly(): void {
      console.log('这是person2中的fly方法');

    }
    swim(): void {
      console.log('这是person2中的swim方法');

    }
  }
  // 实例化对象
  const person2 = new Person2()
  person2.fly()
  person2.swim()

  // 总结：类可以通过接口的方法，来定义当前这个类的类型
  // 类可以实现一个接口，类也可以实现多个接口。接口中的内容都需要真正的实现

  // 定义一个接口，继承其他的多个接口
  interface IMyFlyAndSwim extends IFly, ISwim { }

  // 定义一个类，直接实现IMyFlyAndSwim接口
  class Person3 implements IMyFlyAndSwim {
    fly(): void {
      console.log('person3');

    }
    swim(): void {
      console.log('person3');

    }
  }
  const person3 = new Person3()
  person3.fly()
  person3.swim()

  // 总结：接口与接口之间叫继承（使用extends关键字），接口和类之间叫做实现（使用implemets关键字）
})()