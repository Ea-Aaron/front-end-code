// 多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生的不同的行为

(() => {
  // 定义一个父类
  class Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }
    run(distance: number = 0) {
      console.log(`跑了${distance}米的距离`, this.name);

    }
  }

  // 定义一个子类
  class Dog extends Animal {
    constructor(name: string) {
      super(name)
    }
    run(distance: number = 5) {
      console.log(`跑了${distance}米的距离`, this.name);
    }
  }
  // 定义一个子类
  class Pig extends Animal {
    constructor(name: string) {
      super(name)
    }
    run(distance: number = 10) {
      console.log(`跑了${distance}米的距离`, this.name);
    }
  }

  // 实例化父类
  const ani: Animal = new Animal('动物')
  ani.run()

  // 实例化子类
  const dog: Dog = new Dog('大黄')
  dog.run()

  // 实例化子类
  const pig: Pig = new Pig('八戒')
  pig.run()

  console.log('============================');

  const dog1: Animal = new Dog('小狗')
  dog1.run()
  const pig1: Animal = new Pig('小猪')
  pig1.run()

  console.log('===========================');

  function showMsg(ani: Animal) {
    ani.run()
  }
  showMsg(dog1)
  showMsg(pig1)
})()