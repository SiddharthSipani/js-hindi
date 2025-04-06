//#primitive 
//it all are call by value
/*symbol :-symbol are used to created unike value.we ate used in wrap*/
// 7types:String,Number,Boolearn,null,undefiend,symbol,BigInt

const score=100;
const scoreValue=100;
const isLoggedIn=false;
const Outside=null;

const id = Symbol('123');
const anotherId=Symbol('123');

//console.log(id == anotherId);
//false because inside define value are same  but symbol define value are  not equal.


const BigNumber =34534453242433432n


//non primitive(Reference type)
//Array,Objects,Functions



const heros =["shaktiman", "naagraj","doga"];

 let myObj={
   name: "hites",
   age: 22,
}

 const myFunction=function(){
    console.log("helo world") 

}

//console.log(typeof anotherId);


//*************************************** */
//stack(Primitive),heap(Non -primitive)


let myyoutubename ="siddourpotential"

let anothername = myyoutubename
anothername="chai"
console.log(myyoutubename);
console.log(anothername);

let userOne ={
   email: "user@google.com",
   upi: "user@ybl"
}

let usertwo =userOne


usertwo.email ="sidd@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);