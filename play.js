let name = 'Saju';
var age = 27;
var hobbies = true;
console.log(name, age, hobbies);
//
function user(name, age) {
  return 'Name is ' +name + ' Age is '+age;
}
// console.log(user(name, age));
const user1 =(a,b)=> {
  return
}

//Const keyword creates a constant key work where the value of the variable never change.
//Var is outdated. instead of var use Let
//  const name1 = 'Saju';
// let age2 = 27;
// let hobbies3 = true;
// console.log(name1, age2, hobbies3);
//
// function user1(name, age) {
//   return 'Name is ' +name + ' Age is '+age;
// }
// console.log(user1(name1, age2));

//Arrow Function
// const user1 = (name, age) => {
//   return 'saju , 27';
// };

Objects
const person = {
  name: 'Saju',
  age: '27',
};
console.log(person);

//Array
let test = ['test1', 'test2' , 27, true, {name: 'saju'}, ['test3']];
for(let i in test){
  console.log(test[i]);
}
// //subset
 let test1 = [tester': 'test1', 'test2', 'test3'];
 let testSubset = test1.slice(0,1);
// //Map
// //This will add a string called 'testers' before every item in the array test1.
 let testMap = test1.map((val) => 'testers: ' + val);

//Spread operator
 const test = ['test1', 'test2'];
 const cpyTest = [...test];// this is spread optr the cpy of the test
 const addcpyTest = [...test, ...['test3']];//Add test3 in the array of test and this will not edit the previus array

//Rest Operator

//Destructuring
const test88 = {name : 'Saju' , age: 27}
const name = test88.name;
const name = test88.age;
const {name, age} = test88;

//Async
const user = async name => {
  const url = "";
  const response = await fetch(url);
  const data =  response.json();
}
//promise
const userAPI = usernamee => {
  return new Promise((resolve, reject) => {
    fetch("").then((response) => response.json()).then((data) => {
      if(data.message == "error"){
        reject("");
      } else {
        resolve(data)
      }
    })
  })
}



