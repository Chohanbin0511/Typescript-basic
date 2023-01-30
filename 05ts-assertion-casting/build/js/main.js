"use strict";
// convert to more or less specific 
let a = 'hello';
let b = a; // less specific 
let c = a; // more specific 
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
console.log(typeof nextVal);
console.log(nextVal);
//10 as string
//(10 as unknown) as string
// The DOM 
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
function getEmployeeName(emp) {
    return emp.name; // 👈️ use non-null assertion
    //return (emp as Employee).name; // 👈️ type assertion
    //return emp?.name; // 👈️ use optional chaining
    // if (emp) {
    //     // 👉️ emp is type Employee here
    //     return emp.name;
    //   }    
    //   // 👉️ emp is type undefined here
    //   return 'Bob Dylan';
}
// 👇️ "Bobby Hadz"
console.log(getEmployeeName({ id: 1, name: 'Bobby Hadz' }));
console.log(getEmployeeName());
