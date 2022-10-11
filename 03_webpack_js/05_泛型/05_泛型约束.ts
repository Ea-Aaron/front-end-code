// 对一个泛型参数去length属性,会报错,因为这个泛型不知道有没有这个属性
(() => {
  // 定义一个接口，用来约束将来的某个泛型必须要有length这个属性
  interface ILength {
    length: number
  }

  function getLength<T extends ILength>(x: T): number {
    return x.length
  }

  console.log(getLength<string>('what are you doing?'));
  // console.log(getLength<number>(123));

})()