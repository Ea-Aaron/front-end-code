// 静态成员:在类中通过static修饰的属性或者方法,就是静态的属性和方法,也称之为:静态成员
// 静态成员在使用的时候是通过类名.静态成员名来使用的

(() => {
  class Person {
    static pname: string
    // 构造函数不能使用static进行修饰
    constructor(pname: string) {
      // 实例化对象不能访问静态成员
      // this.pname = pname
      Person.pname = pname
    }
    static sayHi() {
      console.log('萨瓦迪卡');

    }
  }

  // 实例化对象
  const per = new Person('小甜甜')
  // console.log(per.pname);
  console.log(Person.pname);

  // per.sayHi()
  Person.sayHi()
})()