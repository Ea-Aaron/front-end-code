function imgLoad(url) {
  let p = new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      let err = new Error(`图片加载失败,${url}`);
      reject(err);
    };
    img.src = url;
    document.body.appendChild(img);
  });
  return p;
}

const url1 = 'https://pic1.zhimg.com/80/v2-e1b7bf2758235e111410a84c700dd258_720w.webp';

imgLoad(url1).then(img1 => {
  console.log(img1.width);
});