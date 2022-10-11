// 入口文件

// 引入模块文件
import * as m1 from "./m1.js";
import * as m2 from "./m2.js";
import * as m3 from "./m3.js";

console.log(m1);
console.log(m2);
console.log(m3);

m1.stu();
m2.find();
m3.default.change();

// 修改背景颜色为粉色
// 1.node 导入 jQuery  npm i jquery
// 2.引入jQuery
import $ from 'jquery'; // const $ = require("jquery");
$('body').css('backgroundColor', 'pink');