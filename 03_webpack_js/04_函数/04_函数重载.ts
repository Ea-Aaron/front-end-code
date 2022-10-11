// 函数重载:函数名字相同,函数的参数及个数不同

(() => {
  // 需求:声明一个add函数,可以接受两个string类型的参数进行拼接,也可以接受两个number类型的参数进行相加

  // 函数重载
  function add(x: string, y: string): string
  function add(x: number, y: number): number

  // 函数声明
  function add(x: string | number, y: string | number) {
    if (typeof x === 'string' && typeof y === 'string') {
      return x + y
    } else if (typeof x === 'number' && typeof y === 'number') {
      return x + y
    }
  }

  console.log(add('诸葛', '孔明'));
  console.log(add(10, 20));
  // 此时传入的时非法的数据,需要报错
  // console.log(add('东方', 10));
  // console.log(add(20, '不败'));

})()