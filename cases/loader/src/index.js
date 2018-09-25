import {HelloWorld,HelloWorld1, HelloWorld2, HelloWorld3} from "./module.js"


var h = new HelloWorld()
var h1 = new HelloWorld1()
var h2 = new HelloWorld2()
var h3 = new HelloWorld3()

console.log(h)
console.log(h1)
console.log(h2)
console.log(h3)
window.HelloWorld = HelloWorld;
window.HelloWorld1 = HelloWorld1;
window.HelloWorld2 = HelloWorld2;
window.HelloWorld3 = HelloWorld3;