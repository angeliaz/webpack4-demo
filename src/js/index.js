import promise from './promise/promise.js';
// import '../css/index.css';
import '../css/main.less';

// addImage.js
let smallImg = document.createElement('img')
// 必须 require 进来
smallImg.src = require('../images/newer.png')
// console.log(smallImg)
document.body.appendChild(smallImg)

/* let bigImg = document.createElement('img')
bigImg.src = require('../images/big.jpeg')
document.body.appendChild(bigImg) */

console.log('index');