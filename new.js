const names = require("./names")
const {John, Amaka} = names
console.log(John);

const Hello = (name) =>{
  console.log(`Hello, nice to know you ${name}`)
}

Hello(John)