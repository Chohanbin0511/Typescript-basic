"use strict";
// Index Signatures 
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log('Pizza value');
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log('prop : ', todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        console.log('----> ' + transaction);
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
todaysTransactions.Pizza = 40;
console.log(todaysTransactions['Dave']); // undefined
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
//console.log(student.test)
let stuKey;
stuKey = 'name';
stuKey = 'GPA';
// code:46 선언을 해야 사용 가능
// stuKey = 'grade'
console.log('sudent => key : value');
for (const key in student) {
    // console.log(`${key}:${student[key]}`)
    console.log(`${key}: ${student[key]}`);
}
console.log('student => value');
Object.keys(student).map(key => {
    console.log("typeof student", key);
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
    goodbonus: 400
};
for (const revenue in monthlyIncomes) {
    console.log();
    console.log(revenue, ':', monthlyIncomes[revenue]);
}
