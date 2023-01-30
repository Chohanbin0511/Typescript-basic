"use strict";
let jp = {
    active: true,
    albums: ['트랙1', 1]
};
// Literal types
let myName;
// myName = 'john' // error
//Union Literal types
let userName;
userName = 'Amy';
console.log("userName", userName);
console.log("userName type: ", typeof userName);
// functions 
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// let add: mathFunction = function (c, d) {
//     return c*d
// }
// optional parameters 
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
console.log('optional parameters');
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
// default param value
const sumAll = (a = 10, b, c = 2) => {
    console.log('=> input a b c : ' + a, b, c);
    return a + b + c;
};
console.log('default param value');
logMsg(sumAll(5, 3));
console.log('sumAll undefined');
logMsg(sumAll(undefined, 3));
// Rest Parameters 
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log('total');
logMsg(total(10, 2, 3));
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// use of the never type 
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
// custom type guard 
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
console.log('numberOrString : ', numberOrString('test'));
console.log('numberOrString : ', numberOrString(222));
