// 接口是对象的状态（属性）和行为（方法）的抽象（描述）
// 接口：是一种类型，是一种规范，是一种能力，是一种约束
(() => {
  /* 
    需求: 创建人的对象, 需要对人的属性进行一定的约束
    id是number类型, 必须有, 只读的
    name是string类型, 必须有
    age是number类型, 必须有
    sex是string类型, 可以没有
  */

  interface IPerson {
    // readonly 表示属性是只读的
    readonly id: number
    name: string
    age: number
    // ？ 表述属性是可有可无的
    sex?: string
  }

  const person: IPerson = {
    id: 1,
    name: 'tom',
    age: 20,
    // sex: '男'
  }

  console.log(person);

})()