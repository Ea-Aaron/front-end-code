let obj = {
  name: '张三',
  age: 18,
  address: {
    city: '武汉'
  },
  hobby: ['旅游', '吃饭', '睡觉']
};

function deepClone(obj) {
  // 如果obj不是对象或者数组
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (var key in obj) {
    // 判断这个属性是否是在对象身上
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}

let obj1 = deepClone(obj);
console.log(obj1);
obj1.name = '王五';
obj1.age = 20;
console.log('修改后的obj1', obj1);
console.log('原来的对象obj', obj);