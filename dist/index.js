"use strict";
// let nm="minhaj"
//  nm=8
// function add(a:number,b:number):number{
//     return a+b;
// }
// console.log(add(2,1));
const grade = {
    name: "minhaj",
    roll: 13,
    marks: 80
};
const calculateGrade = (grade) => {
    const { name, roll, marks } = grade;
    return `name is ${name}, roll- ${roll},marks- ${marks}`;
};
console.log(calculateGrade(grade));
