"use strict";
function getNumber(value) {
    return value;
}
function getArray(value) {
    return value;
}
// Generic type - function
function getValue(value) {
    return value;
}
console.log(getValue('hi').toLocaleUpperCase());
console.log(getValue(100).toLocaleString());
const tony = { name: 'tony', age: 100 };
class StateObject {
    constructor(value) {
        console.log('constructor value ' + value);
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const object1 = new StateObject("Chohbin");
console.log(object1.state);
object1.state = 'Chohbin1';
console.log("object :", object1.state);
const object2 = new StateObject([10, 200]);
console.log(object2.state[0]);
object2.state = ['Chohbin1', 30, true];
console.log(object2.state);
