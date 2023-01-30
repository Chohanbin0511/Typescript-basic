"use strict";
let myName = 'Typescript';
let meaningOfLife;
let isLoading;
let album;
myName = 'John';
meaningOfLife = 42;
isLoading = true;
album = 5150;
//function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(1, 23));
//union type
let postId;
postId = 'ts';
postId = 100;
let isActive;
// 유의 사항  such라는 단어가 있으면 true/false
const regex = /such/ig;
const testValue1 = 'You are such a great!!';
const testValue2 = 'It was such a nice day';
console.log(regex.test(testValue1));
console.log(regex.test(testValue2));
console.log(new RegExp(regex).test(testValue1));
console.log(new RegExp(regex).test(testValue2));
