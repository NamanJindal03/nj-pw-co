// var userAge = 17;
// //to check whether a person can vote or not in India
// if(userAge >= 18 ){
//     console.log('user is allowed to vote')
// }
// else{
//     console.log('user is not allowed to vote')
// }

//loop 
/* 
    for
    while 


    for in -> this is to iterate objects
    for of -> this is to iterate array
    do while  -> you don't need it  -> expore on your own
    map  -> HOF
    forEach -> HOF

*/

//iterate from 0 to 100
// let i = 90
// for(i;i<=100;){
//     console.log(i);
//     i++;
// }
// let i = 90
// for(;;){

// }
/* 
    for(;;){
    }
    why was the above needed? 
    sometimes in mcq output wuestions you get sitations like abvoe

    placement universityh ->
    basic programming | basic logical wuestons 

*/

// let initialValue = 0;
// let finalValue = 100;
// while(initialValue <= finalValue){
//     console.log(initialValue) //infinite loop
//     initialValue = initialValue + 1;
// }

/* 
    Livescript -> this was the roiginal name of JS 
    marketing move -> to increase the popularity of JS -> 

    JAVA was very famous -> 
        javascript -> 
    
    java -> 

    es5 es6 es7 -> ecmascript 7 -> 
    regularise JS -> ecmascript -> 

    typescript -> microsoft -> no it is not a google extension -> 
    its a complete language which uses js as its base -> 
*/

//base function that are present 
/* 
    js -> you can store a funciton inside a variable -> 
*/
// function sample(){

// }
// var sampleVar = function(){

// }

// var sampleVar2 = function sam(){

// }

//arrow function -> explore later ->m

//ES 5 -> 

/* 
    var 

    limitations -> 
*/

//ES6 -> that is much much preferred to use over the ES5 
//never use var -> (always prefer to use let and const )
/* 
    let cosnt
    arrow functions
    map, filter, reduce
    promises 
*/
// var a = 10;
// var a = 100; //updated -> reinitialised it 
// console.log(a); 
/* 
    reinitalise -> 
    redeclrate -> var allows you to redeclrare a variable -> 
*/
// let b = 10;
// b = 20;
/* 
    error -> 
    why let came instead of var -> because var was too kind (too lilient)
*/

//facebook -> home.js

// function sample(){
//     console.log('a')
// }
// var sampleVar = function(){
//     console.log('b')
// }
// var sampleVar2 = function sam(){
//     console.log('c')
// }
// sample();
// sampleVar();
// sampleVar2();
// sam() //will not work

/* 
    difference between referencing a function vs calling a function
*/

/* 
    arguments and parameters -> 
*/

/* 
    what is the purpose of function? 
    to do a specifc job
    to reuse

    DRY -> do not repeat yourself -> 
    FACEBOOK -> 
        somebody profile -> 
        
        single responsibility principle -> 
        canProfileBeAccessed(viewer, profile){
            profile is public
            user is friends with the other user 
        }

*/
//unlimited parameters
// function add(){
//     let sum = 0;
//    for(let i=0; i< arguments.length; i++){
//         sum += arguments[i];
//         // console.log(first)
//    }
//    console.log(sum)
// }
// add(10, 20, 30);
// add(100,150, 300);
// add(10, 20);
// add(1,23,3,4,5,6,7,8,9,10)
// add(1, 6, 8, 9); //arguments ??


// function add2(a,b){
//     return a+b //this returns the new value to the place whom called it
// }

// function add3(a,b){
//     console.log('here',a+b) // this has nothign to do with return
// }

// const output1 = add2(10, 20);
// const output2 = add3(10, 20);
// console.log(output1);
// console.log(output2)
/* 
    consoling and returning -> 
*/

// console.log('this is my first time running a js code')
// function sample3(){
//     console.log('in sample 3')
// }
// function sample2(){
//     console.log('in sample 2');
//     sample3()
// }

// function sample(){
//     let a = 10;
//     console.log(a);
//     console.log('coming')
//     console.log('coming')
//     sample2()
// }
// sample();
// sample();

// function sample(a, b){
//     return a
// }
// function sample2(x,z){
//     return x+z
// }
// function sample3(a,b){
//     console.log(a+b+ 40)
// }
// const a = sample(10,20);
// const b = sample2(a, 50);
// const c = sample3(a, b);


// let a = 10;

// function abcd(){
//     console.log('soemthing')
// }

// a = 40;

// abcd();
// console.log(z);//what should be the value over here?

// console.log(sum(10,5));


// var sum = function(a,b){
//     var c = 30;
//     return a+b+c;
// }
// var z = 10;
// var x = 10 + z;

// var ans = sum(z, x);
// console.log(ans);

/* 
    temporal dead zone -> in let and const also hoisting happens but it is restricted access.
*/

// console.log(a)
// var a = 100;
// console.log(a+b);
// a = 200;
// console.log(a);
// var b = 20;

// var x = 10;
// function test(){
//     if( x > 5){
//         x = 50
//     }
//     console.log(x);
// }

// test();

// var y= 10;
// function test(){
//     if(y> 20){
//         var x = 50
//     }
//     console.log(x)
// }
// test()

// var a = 10;
// var a =20;

// let b = 20;
// let b = 50;

// console.log(a);
// const a = 10;
/* 
    tdz -> temporal dead zone -> temporary dead zone -> 
    the TDZ is the zone where the value of the vairable cnanot be acccessed nad this zone is from the starting of the
    program to the initialization of the variable. 

*/

// function test(){
//     {
//         let letVariable = 10;
//         const constVariable = 30;
//     }
//     var ab = 20;
//     console.log(letVariable);
//     console.log(constVariable);
//     console.log(ab)
// }
// console.log(ab);
// console.log(letVariable);
// console.log(constVariable);

// let a = 10;
// let b = 100;
// let c = 300;
// [a,b] = [b, a, c];
// console.log(a+b+c);

// let a = 10; //you cannot change the variable name -> 
// let obj = {
//     a: 300,
//     b: 200,
//     c: 10
// }

// /* aliasing  */
// const {b,c,a: anotherName} = obj;
// console.log(anotherName); //
// console.log(b); //
// console.log(c); //

//how to rectify this code?













// function callMe2(){
//     if(a > b){
//         var a = 60;
//         let b = 50;
//         const c = 60;
//         console.log(a,b,c);
//     }
//     console.log(a,b,c);
// }
// callMe2(12,4,5)


//difference between forEach and Map

//map gives you a new array whereas forEach does not 
// const original = [1,2,3,4,5]
// const arr = original.map((val, index, completeArr)=>{
//     return val + 10;
// })
// console.log(arr);
// console.log(original)

// original.forEach(((val)=>{
//     return val + val
// }))
// console.log(original)


// for(let i=0; i<original.length; i++){
//     original[i] = original[i] + 20;
// }
// console.log(original)

//map and forEach -> higher order functions -> 
//how??

// const original = [1,2,3,4,5]

// const filtered = original.filter((val)=>{
//     return val % 2 === 1;
// })
// console.log(filtered)

//dynamic objects?? 
// difference between . [] -> 


// const D1 = ['a', 'b', 'c', 'd']; //1D array -> 

// const D2 =
//     [ ['a', 'b', 'c', 'd'], [1,2,3,4], ['z', 1, 'a', 2] ]

// console.log(D1);
// console.log(D2);

// console.log(D1[0]);
// console.log(D2[0][0]);

// const ques = [{key: 'a', value: 'abcd'}, {key: 'b', value: 'plo'}, {key: 'c', value: '3'}];
// let ans = {};

// //write a code such that when I print the ans I should get a value
// /* 
//     console.log(ans)
//     {
//         a: 'abcd',
//         b: 'plo',
//         c: '3'
//     }
        
// */

// function getObj(arr, ans){
//     //complete the function such that I get the desired output
//     arr.forEach((obj)=>{
//         ans[obj['key']] = obj.value
//     })
//     return ans
// }

// ans = getObj(ques, ans)
// console.log(ans);



// const ans = 
//you have to write a code such that the value looks like 
// console.log(ans) //undefined

/* 
    [], .

    . notation always consider the key as a string 
    whereas in the [] -> we have the option to tell whether the key is a variable or a string

*/
// const newObj = {};
// const key = 'a';
// const value = 10;

// // newObj.key = value;
// /* 
//     what to write over here such that the ans is {a: 10}
// */
// newObj[key] = value;
// /* 
//     Breakdown: 

//     newObj['a'] = 10
//     {a: 10}
// */


// // newObj['key'] = value;
// console.log(newObj); //what will be the output?

//difference between slice and splice -> 

// const sampleArr = [10,20,30,40,50]
// const ans = sampleArr.slice(1,1);
// console.log(ans); //[]
// console.log(sampleArr); //remains unchanged  

/* 
    slice -> 
    it does not alter the orignal arr
    the last value is not inclusive and first value is incluse

    splcie ->
    it does alter the original array
    the second paramter in the splice is the number of deletions to be done
    it returns the deletions
*/

// function sam(a, b){
//     a.push('a');
//     b.a = 'a';
// }
// const arr = [10,20,30,40];
// let obj = {a: 10, b: 20}
// sam(arr, obj)

// console.log(arr); // [10, 20, 30, 40, 'a' ]

// console.log(obj);// { a: 'a', b: 20 }

// function delay(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(100)
//         }, 1000)
//     })  
// }

// let output = delay();
// output.then((data)=>{
//     console.log(data);
//     const prom = new Promise((resolve, reject)=>{
//         setTimeout(()=>{

//             reject('new value')
//         }, 3000)
//     }) 
//     prom.then((data)=>{
//         // console.log('coming hjere')
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
//     //to be resolved or rejected
//     // return new Promise
// })
// // .then
// .catch((err)=>{
//     console.log('enters catch')
//     console.log(err)
// })
// console.log(output);

//what will happen in the above situation and how is it different from the previous



//difference between async function and normal function?

// async function random(){
//     //async functions are always promisified
//     return new Promise((resolve, reject)=>{
//         resolve('a')
//     })
// }
// const a = random();
// a.then((data)=>{console.log(data)})
// // console.log(a); //

// function random2(){
//     return 10
// }
// const b = random2();
// console.log(b); //

//a grouped thing which can handle everything related to the Parent class
// class Parent{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     giveFull(){
//         return this.name + this.age
//     }
// }

// class SoftwareEngineer extends Parent{
//     constructor(name, age, yearsOfExperience){
//         super(name, age);
//         this.yearsOfExperience = yearsOfExperience;
//     }
// }

// const p1 = new Parent('naman', 1);
// const p2= new Parent('naman2', 2);
// const p3 = new Parent('naman3', 3);

// const se1 = new SoftwareEngineer('Neha', 2, 10);
// console.log(se1.giveFull())

// console.log(p1.giveFull());
// console.log(p2.giveFull());
// console.log(p3.giveFull());

// console.log(p1)
// console.log(p2)
// console.log(p3)




// function randomProm(){
//     return new Promise((resolve, reject)=>{

//     })
// }


// async function and normal

// setTimeout(()=>{
//     console.log(1)
// },0)

// console.log(2)

// try{

// }
// catch(err){

// }
// finally{

// }

//4xx series error
// fetch('https://fakestoreapi.com/product/1')
//     .then((data)=>{
//         if(!data.ok){
//             throw Error('something went wrong')
//         }
//         return data.json()
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// async function getData(){
//     try{
//         const response = await fetch('https://fakestoreapi.com/product/1');
//         // if(!response.ok){
//         //     throw Error('something went wrong')
//         // }
//         const data = await response.json();
//         console.log(data)
//     }
//     catch(err){
//         console.log(err);
//     }
//     finally{
//         console.log('no matter what I will get executed!!!')
//     }
    



//     // .then((data)=>{
//     //     if(!data.ok){
//     //         throw Error('something went wrong')
//     //     }
//     //     return data.json()
//     // })
//     // .then((data)=>{
//     //     console.log(data)
//     // })
//     // .catch((err)=>{
//     //     console.log(err)
//     // })
// }
// getData();

// fetch('https://fakestoreapi.com/product/1')
// .then((data)=>{
//         console.log(ll)
//         // if(!data.ok){
//         //     throw Error('something went wrong')
//         // }
//         return data.json()
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
//     .finally(()=>{
//         console.log('lllllll')
//     })


// <div classname="card">
//     <div>
//         <p></p>
//         <span></span>
//     </div>
// </div>


// const rootElem = document.getElementById('root');
// const divContainer = document.createElement('div');
// const divChildContainer = document.createElement('div2');
// const pElem = document.createElement('p');
// pElem.textContent = "Lorem ipsum dolor sit amet."
// divChildContainer.append(pElem);
// divContainer.append(divChildContainer);

// divContainer.classList.add('card');
// rootElem.append(divContainer);