type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific 
let a: One = 'hello'
let b = a as Two // less specific 
let c = a as Three // more specific 

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}


let myVal: string = addOrConcat(2, 2, 'concat') as string

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number
console.log(typeof nextVal)
console.log(nextVal)


//10 as string
//(10 as unknown) as string

// The DOM 
// '!'는 null이 아닐때를 의미
const img = document.querySelector('img')!

// id로 접근하면 HTMLElement로 접근하기 때문에 HTMLImageElement로 형변환
const myImg = document.getElementById('#img') as HTMLImageElement

const nextImg = <HTMLImageElement>document.getElementById('#img')

//img.src
//myImg.src
//nextImg.src

type Employee = {
    id: number;
    name: string;
  };
  
  function getEmployeeName(emp?: Employee) {
    // return emp!.name; // 👈️ use non-null assertion    
    // return (emp as Employee).name; // 👈️ type asserttion
    // return emp?.name; // 👈️ use optional chaining
    // 👇️ 사실 이게 가장 안전한 방법
    if (emp) {
      return emp.name
    }
    return 'Name Example'
  }
  
  // 👇️ "Bobby Hadz"
  console.log(getEmployeeName({ id: 1, name: 'Bobby Hadz' }))
  console.log(getEmployeeName())
