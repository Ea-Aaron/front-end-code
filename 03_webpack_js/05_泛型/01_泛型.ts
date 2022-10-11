// 泛型:在定义函数、接口、类的时候不能预先确定要使用的数据的类型，而是在使用函数、接口、类的时候才能确定数据类型
(() => {
  // // 定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量，函数的作用：根据数量产生对应个数的数据，存放在一个数组中
  // function getArr1(value: number, count: number): number[] {
  //   const arr: number[] = []
  //   for (let i = 0; i < count; i++) {
  //     arr.push(value)
  //   }
  //   return arr
  // }
  // console.log(getArr1(10.12, 3));

  // // 定义一个函数，存放的是字符串类型
  // function getArr2(value: string, count: number): string[] {
  //   const arr: string[] = []
  //   for (let i = 0; i < count; i++) {
  //     arr.push(value)
  //   }
  //   return arr
  // }
  // console.log(getArr2('abc', 3));

  // 需求：可以传入任意类型的数据，返回来的是存储这个任意类型的数据
  // function getArr3(value: any, count: number): any[] {
  //   const arr: any[] = []
  //   for (let i = 0; i < count; i++) {
  //     arr.push(value)
  //   }
  //   return arr
  // }
  // const arr1 = getArr3(100.123, 3)
  // const arr2 = getArr3('abc', 3)
  // console.log(arr1[0].toFixed(2)); // 没有任何只能提示
  // console.log(arr2[0].split(''));// 没有任何只能提示

  function getArr4<T>(value: T, count: number): T[] {
    const arr: T[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr1 = getArr4<number>(100.123, 3)
  const arr2 = getArr4<string>('abc', 3)
  console.log(arr1[0].toFixed(2))
  console.log(arr2[0].split(''));

})()