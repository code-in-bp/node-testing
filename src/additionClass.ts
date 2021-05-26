class additionClass {

    constructor () {
        console.log("I am addition Class");
    }

    add (arg1: number, arg2: number) {
        var result;
        result = arg1 + arg2;
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