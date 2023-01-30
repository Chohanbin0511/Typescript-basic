function getNumber(value: number) {
    return value;
}

function getArray(value: string[]) {
    return value;
}

// Generic type - function
function getValue<T>(value: T): T {
    return value;
}
console.log(getValue('hi').toLocaleUpperCase());
console.log(getValue(100).toLocaleString());


// Generic type - interface
interface Developer<T> {
    name: string;
    age: T;
}
const tony: Developer<number> = { name: 'tony', age: 100 };

class StateObject<T> {
    private data: T

    constructor(value: T) {
        console.log('constructor value ' + value)
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const object1 = new StateObject("Chohbin")
console.log(object1.state);
object1.state = 'Chohbin1'
console.log("object :",object1.state);

const object2 = new StateObject(<(string | number | boolean)[]> [10,200])

console.log(object2.state[0]);

object2.state = ['Chohbin1', 30 , true];

console.log(object2.state);

