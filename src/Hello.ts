

// OOP way
class Hello {
    constructor () {
        console.log("initiate");
    }
    add(arg1: number, arg2: number) {
        var result;
        result = arg1 + arg2;
        return result;
    }

 }

module.exports = Hello;





// Functional way
// export function hello() {
//     return "Hello";
// }

// export default hello;