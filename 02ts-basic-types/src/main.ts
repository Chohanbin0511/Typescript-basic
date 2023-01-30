let myName: string = 'Typescript'
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = 'John'

meaningOfLife = 42
isLoading = true
album = 5150

//function
const sum = (a: number, b:number): number => {
    return a + b
}

console.log(sum(1,23));


//union type
let postId: string | number
postId = 'ts'
postId = 100

let isActive: number | boolean

// 유의 사항  such라는 단어가 있으면 true/false
const regex: RegExp = /such/ig;

const testValue1: string = 'You are such a great!!';
const testValue2: string = 'It was such a nice day';

console.log( regex.test( testValue1 ) ); 
console.log( regex.test( testValue2 ) );

console.log( new RegExp(regex).test( testValue1 ) ); 
console.log( new RegExp(regex).test( testValue2 ) );
