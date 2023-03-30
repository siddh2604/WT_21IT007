let myDiv1 = document.getElementById("Div1");
let myDiv2 = document.getElementById("Div2");
let myDiv3 = document.getElementById("Div3");
let myDiv4 = document.getElementById("Div4");
let myDiv5 = document.getElementById("Div5");
let myDiv6 = document.getElementById("Div6");
const students = [
    { firstName: 'Siddh', lastName: 'Bhalodia', age: '19', },
    { firstName: 'Krish', lastName: 'Parmar', age: '19' },
    { firstName: 'Raj', lastName: 'Fachara', age: '23' },
];
//forEach() Function 
students.forEach((student, index) => {
    myDiv1.innerHTML += `Index ${index}: ${student.firstName} ${student.lastName} <br/>`;
});
//map() Function 
students.map((student, index) => {
    myDiv2.innerHTML += `Index ${index}: ${student.firstName} ${student.lastName} <br/>`;
});
//reduce() Function
const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
myDiv3.innerHTML = sum;
//apply() Function
const max = Math.max.apply(null, numbers);
myDiv5.innerHTML = max;
//call() Function
const person = {
    firstName: 'Rahul',
    lastName: 'Gandhi',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
const fullName = person.fullName.call({ firstName: 'Ratan', lastName: 'Tata' });
myDiv4.innerHTML = fullName;
//bind() Function
const fullNameB = person.fullName.bind({ firstName: 'Muskesh', lastName: 'Ambani' });
myDiv6.innerHTML = fullNameB();