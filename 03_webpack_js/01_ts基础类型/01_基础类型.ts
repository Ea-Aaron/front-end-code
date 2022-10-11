// 基础类型
(() => {
  // 布尔类型 ---->boolean
  let flag: boolean = false
  console.log(flag);

  // 数字类型 ---->number
  let a1: number = 10 // 十进制
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  console.log(a1);
  console.log(a2);
  console.log(a3);
  console.log(a4);

  // 字符串类型 ---->string
  let str1: string = '床前明月光'
  let str2: string = '小明去开窗'
  let str3: string = '遇到一耳光'
  let str4: string = '牙齿掉光光'
  console.log(`${str1},${str2},${str3},${str4}`);

  // 字符串和数字拼接
  let str5: string = '我有这么多钱'
  let num: number = 1000
  console.log(str5 + num);

  console.log('=============================');


  // 在ts中，初始化变量时指定什么类型，后期就只能赋值相同类型

  // undefined 和 null
  let u: undefined = undefined
  let n: null = null
  console.log(u);
  console.log(n);

  // 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量(需要关闭ts严格模式)
  // let num1: number = undefined
  // let num2: number = null
  // console.log(num1);

  // 数组类型
  // 数组定义方法1
  // 语法：let 变量名：数据类型[] = [值1，值2，值3]
  let arr1: number[] = [10, 20, 30]
  console.log(arr1);

  // 数组定义方法2：泛型的写法
  // 语法：let 变量名：Array<数据类型> = [值1，值2，值3]
  let arr2: Array<number> = [100, 200, 300]
  console.log(arr2);
  // 注意：数组初始化时设置的数据类型，后续的复制必须保持一直，否则报错

  // 元组类型
  let arr3: [string, number, boolean] = ['小弟', 100.1316, true]
  console.log(arr3);
  // 注意：元组类型在初始化时，数组类型和个数都已限制，后续的赋值需保持一致
  console.log(arr3[0].split(''));
  console.log(arr3[1].toFixed(2));

  // 枚举,默认情况下，从 0 开始为元素编号
  enum Color {
    Red = 1,
    Green,
    Blue = 4
  }

  // 枚举数值默认从0开始依次递增
  // 根据特定的名称得到对应的枚举数值
  let myColor: Color = Color.Green  // 0
  console.log(myColor, Color.Red, Color.Blue)

  // any 表示1个任意类型的
  // let str: any = 100
  // let str: any = '测试'
  let str: any = [100, 'zifuc', true]
  console.log(str);
  // any无法对内部内容进行判断，无法识别该方法是否在其原型链上，不会给出错误提示，但是编译会报错
  // console.log(str[0].split(''));

  // void
  // 在函数名后声明，表示该函数没有返回值
  function fun(): void {
    console.log('void声明函数');
  }
  fun()
  console.log(fun()); // undefined
  // 定义一个void类型的变量，可以复制undefined，但是意义不大
  let vd: void = undefined
  console.log(vd);

  console.log('============================');

  // object 类型
  // 定义一个函数，参数是object类型，返回值也是object类型
  function getObj(obj: object): object {
    console.log(obj);
    return {
      name: '卡卡西',
      age: 27
    }
  }
  // console.log(getObj({ name: '佐助', age: 8 }));
  // console.log(getObj('123')); 错误
  // console.log(getObj(new String('123')));
  // console.log(getObj(String));

  // 联合类型
  // 需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
  function toString(str: string | number) {
    return str.toString()
  }
  console.log(toString(23456));

  // 需求2: 定义一个一个函数得到一个数字或字符串值的长度
  function getLength(str: string | number) {
    // return str.toString().length
    // 类型断言,告诉编译器自己知道是什么类型，知道自己要干啥
    // 当str是string类型时，不需要转化为toString
    // 语法1：<类型>变量名
    // 语法2：变量名 as 类型
    if ((<string>str).length) {
      return (str as string).length
    } else {
      return str.toString().length
    }
  }
  // console.log(getLength(123456));
  // console.log(getLength('0123456789'));

  // 类型推测，TS会在没有明确的指定类型的时候推测出一个类型
  // let txt = 100 // number类型
  // txt = 'ceshi'
  // console.log(txt);

  let txt; // any类型
  txt = 100
  txt = 'haoshuai'
  console.log(txt);

})()