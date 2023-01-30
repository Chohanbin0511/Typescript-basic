// Index Signatures 

// interface TransactionObj {
//     readonly [index: string]: number
// }

interface TransactionObj {
    // prop 에 선언한 code:26이 가능하려면 아래 readonly 선언해줘야함
    readonly [index: string]: number 
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}

console.log('Pizza value')
console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log('prop : ',todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        console.log('----> ' + transaction)
        total += transactions[transaction]
    }
    return total
}
console.log(todaysNet(todaysTransactions))

todaysTransactions.Pizza = 40

console.log(todaysTransactions['Dave']) // undefined

///////////////////////////////////

interface Student {
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

//console.log(student.test)
let stuKey: keyof Student
stuKey = 'name'
stuKey = 'GPA'
// code:46 선언을 해야 사용 가능
// stuKey = 'grade'


console.log('sudent => key : value')
for (const key in student) {
    // console.log(`${key}:${student[key]}`)
    console.log(`${key}: ${student[key as keyof Student]}`)
}
console.log('student => value')
Object.keys(student).map(key => {
    console.log("typeof student",key as keyof typeof student);
    
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}
logStudentKey(student, 'name')
logStudentKey(student, 'GPA')
/////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

// Union type literals
type Streams = 'salary' | 'bonus' | 'sidehustle' | 'goodbonus'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
    goodbonus: 400
}

for (const revenue in monthlyIncomes) {
    console.log();
    console.log(revenue , ':', monthlyIncomes[revenue as keyof Incomes])
}