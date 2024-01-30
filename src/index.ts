// let nm="minhaj"
//  nm=8
// function add(a:number,b:number):number{
//     return a+b;
// }
// console.log(add(2,1));

// let longText:string= "minhaj uddin tapader"
// let shortText:string = longText.substring(0,10)
// console.log(shortText);

// const str1:string="min"
// const str2:string="min"
// const areEqual:boolean=str1===str2
// console.log(areEqual);

// const product:string="alu"
// const price:number=20
// const res=`product name is ${product} and price is ${price}`
// console.log(res);
// function divided(a:number):boolean{
//     // if(a%4===0&&a%8===0){
//     //     return true
//     // }
//     // else{
//     //     return false
//     // }
//     return a%4===0&&a%8===0;
// }
// console.log(divided(16));

// let bignumber:bigint=1234567890123456789012345678901234567890n;
// console.log(bignumber);
// let bignumber=BigInt("1234567890123456789012345678901234567890");
// console.log(bignumber);


// aikane unknown abong any ar maje partokko holo kuno operation korar smy any te kuno type check kora lage na kintu unknown e type check kora lage.


// let num1:any=2
// num1="minhaj"
// console.log(num1+3);

// let num1:unknown=2
// num1="minhaj"
// num1=true
// // num1=4

// if(typeof num1==="number"){
//    console.log(num1+3);
// }

// function multi(a:number,b:number){
//     return a*b
// }
// console.log(multi(2,3));

// let a="4"
// a=5

// let arr=["m",2,false]
// arr.push(true)
// console.log(arr);

// const palindrom=(palin:string):boolean=>{
//     let test=palin.split("").reverse().join("")
//     return test===palin
// }
// console.log(palindrom("121"));


// const avgofArr=(val:number[]):number=>{
//     let sum=0
//     for (const i of val) {
//         sum+=i
//     }
//     return sum/val.length
// }
// let arr=[1,9,3]
// console.log(avgofArr(arr));

// const maxofArr=(val:number[]):number=>{
//    let max=val[0]
//    for (const iterator of val) {
//     if(iterator>max){
//         max=iterator
//     }
//    }
//    return max
// }
// let arr=[1,9,13]
// console.log(maxofArr(arr));


// function info(name:string,age:number=12){
//     console.log(`name is ${name} and age is ${age}`);
// }
// info("minhaj")

// function info(name:string,age?:number){
//     let str=""
//     str+=`name is ${name}`
//      if(age){
//         str+=` and age is ${age}`
//     }
//     console.log(str);
// }
// info("minhaj")

// let names = ['minhaj', 'miftah', 'mizan', 'marzan'];
// names.forEach((name) => console.log(name));

//for in e index paowa jay. ar for of a value paowa jay.

// for(let i in names){
//     console.log(i);
// }

// for(let i of names){
//     console.log(i);
// }

// let newNames= names.push("abbu")
// // let newNames1= names.pop()
// let newNames2=names.shift()
// let newNames3=names.unshift("minhaj")


//  console.log(names);
// //  console.log(newNames3);
//  console.log(newNames2);
// // console.log(newNames1);
// // console.log(newNames1);
//  console.log(names);

//map and fillter

// const arr=[1,2,3,4,5]
// const toStr:string[]=arr.map((val:number)=>val.toString())
// console.log(toStr);

// const arr=[1,2,3,4,5]
// const doubleNum:number[]=arr.map((val:number)=>val*2)
// console.log(doubleNum);

// const arr=[1,2,3,4,5]
// const bigThree:number[]=arr.filter((val:number)=>val>3)
// console.log(bigThree);

// const arr=[1,2,3,4,5]
// const bigThree:number[]=arr.filter((val:number)=>val%2===0)
// console.log(bigThree);

// const names=["minhaj","miftah","mizan","marzan"]
// const toUpper:string[]=names.map((val:string)=>val.toUpperCase())
// console.log(toUpper);


// const arr=[1,2,3,4,5]
// const toSqr:number[]=arr.map((val:number)=>val*val)
// console.log(toSqr);


// const names=["minhaj","miftah","mizan","marzan"]
// const lnt:string[]=names.filter((val:string)=>val.length>5)
// console.log(lnt);

// const names=["minhaj","miftah","mizan","marzan"]
// const strtWithA:string[]=names.filter((val:string)=>val.startsWith("A"))
// console.log(strtWithA);


// const info:{
//     name:string;
//     roll:number;
//     university:string;
//     location:{city:string,division:string};
//     semester:number;
//     department:string
// }={
//     name:"minhaj",
//     roll:13,
//     university:"sheikh hasina university",
//     location:{
//         city:"netrokuna",
//         division:"mymonsingh"
//     },
//     semester:4,
//     department:"computer science and engineering"
// }
// // info.semester="four"
// console.log(info);



// const product:{
//     name:string;
//     price:number;
//     quantity:number;
// }={
//     name:"alu",
//     price:30,
//     quantity:4
// }
// // product.price="ten"
// console.log(product.price);

//aliases
// type Product={
//      name:string;
//     price:number;
//     quantity:number;
// }

// const product:Product={
//     name:"alu",
//     price:30,
//     quantity:4
// }
// console.log(product);
// const product_details=(product:Product)=>{
//     return `product name is ${product.name} and price is ${product.price} also quantity is ${product.quantity}`
// }
// console.log(product_details(product));

//signature call
// type Product={
//     price:number;
//     quantity:number;
//     product_details:(name:string)=>void
// }

// const product:Product={
//     price:30,
//     quantity:4,
//     product_details:(name)=>{console.log(`product name is ${name} and price is ${product.price} also quantity is ${product.quantity}`); }
// }
// console.log(product);

// product.product_details("alu")

//enums
// enum Role {
//     student="student",
//     teacher="teacher"
// }
// type Info={
//     name:string,
//     role:Role
// }
// const student:Info={
//     name:"minhaj",
//     role:Role.student
// }
// const teacher:Info={
//     name:"abir",
//     role:Role.teacher
// }
// console.log(student);
// const identify=(info:Info)=>{
//     console.log(`${info.name} is ${info.role}`);
// }
// identify(student)
// identify(teacher)

// enum Color {
//     Red="red",
//     Green="green"
// }
// type PaintBucket={
//     color:Color,
//     capacity:number
// }
// const redBucket:PaintBucket={
//     color:Color.Red,
//     capacity:10
// }
// const greenBucket:PaintBucket={
//     color:Color.Red,
//     capacity:15
// }
// console.log(redBucket);


//tuples

// type Product=[string,number,number]
// const product:Product=["alu",19,3]

// const dlts=(product:Product)=>{
//     const[name,price,quantity]=product
//     console.log(`${name} ${price} ${quantity}`);
// }
// dlts(product)


// type SubjectGrade=[string,string,string,number,number,number]
// const student1:SubjectGrade=["bangla","english","math",20,30,40]

// const dlts=(student:SubjectGrade)=>{
//     const[bangla,english,math,bm,em,mm]=student
//     console.log(`${(bm+em+mm)/3}`);
// }
// dlts(student1)

//union

// const specificInputFrmt=(val:string | boolean | number)=>{
//     if (typeof val==="number") {
//         return `$${val.toFixed(2)}`
//     } else if(typeof val==="string") {
//         let test=val.toLowerCase()
//        return test.slice(0,1).toUpperCase()+test.slice(1)
//     }else{
//         if (val===true) {
//             return "yes"
//         } else {
//            return "no" 
//         }
//     }
// }

// console.log(specificInputFrmt(12));
// console.log(specificInputFrmt(false));
// console.log(specificInputFrmt("MInhaj"));


//intersection

// type User={
//     id:number,
//     name:string,
//     email:string
// }
// type Account={
//     accountId:number,
//     accountType:string,
//     balance:number
// }
// const user:User={
//     id:1,
//     name:"minhaj",
//     email:"minhajtapader0@gmail.com"
// }
// const account:Account={
//     accountId:121,
//     accountType:"savings",
//     balance:1200
// }
// type Full=Account & User
// const fullInfo=(user:User,account:Account):Full=>{
//     let test={...account,...user}
//     return test
    
// }
// console.log(fullInfo(user,account));

//generics

// function test<T>(data:T){
//     console.log(data);
// }
// test<number>(3)

// const test=<T>(data:T):string =>{
//     return `${data} is str`
// }
// console.log(test<number>(3));

// const test=<T,U>(age:T,name:U):string =>{
//     return `${name} , ${age}`
// }
// console.log(test<number,string>(22,"minhaj"));


//interface
interface Grade{
    name:string,
    roll:number,
    marks:number
}
const grade:Grade={
    name:"minhaj",
    roll:13,
    marks:80
}
const calculateGrade=(grade:Grade)=>{
    const {name,roll,marks}=grade
    return `name is ${name}, roll- ${roll},marks- ${marks}`
}
console.log(calculateGrade(grade));