// 通用事件代理函数
/**
 * 
 * @param {*} elem 节点
 * @param {*} type 事件类型
 * @param {*} selectr 代理节点选择器
 * @param {*} fn 回调函数
 */
function bindEven(elem, type, selectr, fn) {
  // 只传入三个参数
  if (fn == null) {
    fn = selectr;
    selectr = null;
  }

  elem.addEventListener(type, event => {
    // 获取当前点击的节点
    const target = event.target;
    if (selectr) {
      // 代理绑定
      // 判断当前所点击的节点是否是代理节点
      if (target.matches(selectr)) {
        fn.call(target, event);
      }
    } else {
      // 普通绑定
      fn.call(target, event);
    }
  });
}

// 普通绑定


// 代理绑定
const div1 = document.getElementById('div1');
bindEven(div1, 'click', 'a', function(even) {
  even.preventDefault(); // 阻止默认行为
  alert(this.innerHTML);

});
