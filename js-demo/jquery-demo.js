class jQuery {
  constructor(selectr) {
    let result = document.querySelectorAll(selectr);
    let length = result.length;
    for (let i = 0; i < length; i++) {
      this[i] = result[i];
    }
    this.length = length;
    this.selectr = selectr;
  }

  // 方法
  get(index) {
    return this[index];
  }

  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i];
      fn(elem);
    }
  }

  on(type, fn) {
    return this.each(elem => {
      elem.addEventListener(type, fn, false);
    });
  };
}

// 插件
jQuery.prototype.dialog = function(info) {
  alert(info);
};

// 扩展性 复写
class myJquery extends jQuery {
  constructor(selectr) {
    super(selectr);
  }
  // 定义自己的方法
  address() {

  }
}