(() => {
  // 定义一个类,类中的属性值的类型不确定,方法中的参数及返回值的类型也不确定
  class GenericNumber<T> {
    // 默认的属性值的类型为泛型
    defaultValue!: T
    add!: (x: T, y: T) => T
  }

  // 在实例化对象的时候,在确定泛型的类型
  const g1: GenericNumber<number> = new GenericNumber<number>()
  // 设置属性值
  g1.defaultValue = 100
  // 相加的方法
  g1.add = function (x, y) {
    return x + y
  }
  console.log(g1.add(g1.defaultValue, 20));

  // 
  const g2: GenericNumber<string> = new GenericNumber<string>()
  // 设置属性值
  g2.defaultValue = 'jack'
  // 相加的方法
  g2.add = function (x, y) {
    return x + y
  }
  console.log(g2.add(g2.defaultValue, 'ceshi'));
})()