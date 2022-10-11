// readonly修饰符:首先是一个关键字,对类中的属性成员进行修饰后,该成员变为只读属性,不能在外部修改
// 构造函数中可以对只读的属性进行修改
// 如果构造函数中没有任何的参数,类中的属性成员已经用readonly修饰,那么外部也无法修改该属性值
// 构造函数中的参数可以使用readonly修饰符,一旦修饰了,那么该类中就有了这个只读成员的成员属性了,外部可以访问,但是不能修改
// 构造函数中的参数可以使用public,private,protected修饰符,修饰之后,该类中都会自动添加该属性成员
(() => {
  /* class Person {
    // readonly name: string = '大甜甜' // 初始值
    readonly name: string
    constructor(name: string = '大甜甜') {
      this.name = name
    }
    sayHi() {
      console.log('靠你吉瓦', this.name);
      // 类中的方法也无法修改只读属性
      // this.name = '大甜甜'
    }
  }

  // 实例化对象
  const pre = new Person('小甜甜')
  console.log(pre);
  console.log(pre.name); */
  // 此时无法修改类中的只读属性
  // pre.name = '大甜甜'
  // console.log(pre.name);

  // 修饰符的另外一种写法(参数属性)
  class Person {
    // constructor(readonly name: string = '大甜甜') {
    //   this.name = name
    // }

    // constructor(public name: string = '大甜甜') {
    //   this.name = name
    // }

    // constructor(private name: string = '大甜甜') {
    //   this.name = name
    // }

    constructor(protected name: string = '大甜甜') {
      this.name = name
    }
  }

  // 实例化对象
  const pre = new Person('小甜甜')
  console.log(pre);
  // console.log(pre.name);
})()