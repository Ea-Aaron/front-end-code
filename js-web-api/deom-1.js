// dom性能优化
// 1.改为存储在缓存中，一次性加入
// 2.创建一个文档片段，在一次性加入

const list = document.getElementById('list');

// 创建一个文档片段，在一次性加入
const frag = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.innerHTML = `li is ${i}`;
  // @ts-ignore
  frag.appendChild(li);
}

// 再统一到页面中
list?.appendChild(frag);