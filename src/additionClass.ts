class additionClass {

    constructor () {
        console.log("I am addition Class");
    }

    add (arg1: number, arg2: number) : number{
        var result;
        result = arg1 + arg2;
        return result;
    }


    sayHello (arg1: string) {
        console.log("Hello");

    }


    // we want to test callAnotherFn, so the callAnotherFn should be tested regardless what is happening in sayHello() function. 
    // in contrast, callAnotherFn function should not be depended on sayHello function and this done by mocking

    callAnotherFn (arg1: number, arg2: number) {
        this.sayHello("hello");
        var result = this.add(arg1, arg2);
        return result;
    }
}

module.exports = additionClass;




// Functional way
// const add = (arg1: number, arg2: number) => {
//     var result;
//     result = arg1 + arg2;
//     return result;
// }


// export default add;