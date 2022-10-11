// 闭包隐藏数据，只提供API
function creatCache() {
  const data = {};
  return {
    set: function(key, val) {
      data[key] = val;
    },
    get: function(key) {
      return data[key];
    }
  };
}

const c = creatCache();
c.set(a, 10);
console.log(c.get(a));