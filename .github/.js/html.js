
// console.log(a)
// var a =1;
// function name(n) {
//     while(n --> 0) 
//     console.log(n)
// }
// name(3)
//构造函数
// var name = function () {
//     this.w = "name";
// }
// var v = new name();
// console.log(v.w)
// 带参数的构造函数
var v = function(p){
    'use strict';
    this.price = p
}

var h = new v(1000);
console.log(h.price)

var h = new v(2000);
console.log(h.price)
