class HelloWorld {
    salute = () => {
        return console.log('Hello World!');
    }
}
  
class HelloWorld1 {
    constructor(){
        this.salute1 = () => {
            return console.log('Hello World1!');
        }
    }
}

class HelloWorld2 {
    salute2 () {
      return console.log('Hello World2!');
    }
}

class HelloWorld3 {
    static salute3 () {
      return console.log('Hello World3!');
    }
}

console.log(HelloWorld)
console.log(HelloWorld1)
console.log(HelloWorld2)
console.log(HelloWorld3)
console.log("module inner")
export {HelloWorld, HelloWorld1,HelloWorld2,HelloWorld3}