// Type Aliases 
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

let jp: Guitarist = {
    active: true,
    albums: ['트랙1' , 1]
}

type UserId = stringOrNumber

// Literal types
let myName: 'Dave'
// myName = 'john' // error

//Union Literal types
let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'
console.log("userName",userName)
console.log("userName type: ", typeof userName)

// functions 
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2, 3))

let subtract = function (c: number, d: number): number {
    return c - d
}

// function types
type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

// let add: mathFunction = function (c, d) {
//     return c*d
// }

// optional parameters 
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}
console.log('optional parameters')
logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    console.log('=> input a b c : ' + a,b,c)
    return a + b + c
}

console.log('default param value')
logMsg(sumAll(5, 3))
console.log('sumAll undefined')
logMsg(sumAll(undefined, 3))

// Rest Parameters 
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}
console.log('total')
logMsg(total(10, 2, 3))

// never type
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}
// use of the never type 
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

console.log('numberOrString : ' ,numberOrString('test'));
console.log('numberOrString : ' ,numberOrString(222));


