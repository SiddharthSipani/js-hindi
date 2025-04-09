

function sayName(){
    console.log("S");
    console.log("I");
    console.log("D");
    console.log("D");
    
}


//sayName()

// function addTwoNumber(number1,number2){
//   console.log(number1+number2);
  
// }
function addTwoNumber(number1,number2){

    // let result=number1+number2
    // console.log("hitesh");
    return number1+number2
   
    

  }

 const result=addTwoNumber(3,5)

 console.log("Result:",result);

 function loginUserMessage(username){
    if(!undefined){
        console.log("pleaase enter a user name");
        

    }
    return '${username} just logged in'
 }

 //console.log(loginUserMessage("hitesh"))
 //console.log(loginUserMessage())


//***************************************************** */

function  calculatecartPrice( val1,val2,...num1){
    return num1
}



//console.log(calculatecartPrice(200,400,500));


const user={
    username :"price",
    price :1999

}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is $
        {anyObject.price}`);
    
}

//handleObject(user)
handleObject({
    username :"sam",
    price:399
})


const myNewArrays =[200,400,100,232]


function returnSecondValue(getArrays){
    return getArrays[1]
}

console.log(returnSecondValue([200,400,100,232]));
