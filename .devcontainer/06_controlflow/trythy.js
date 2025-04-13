const userEmail =[]

if (userEmail){
    console.log("Got user Email");
    
}else {
    console.log("Don't have user email");
    
}

//falsy values

//false,0,-0,BigInt, 0n, " ",null, undefined,NaN.

//truthy values

//"0","false"," ",[ ],{},function(){}

if (userEmail.length === 0) {
    console.log("arrays is empty");
    
}

const emptyObj={}
if (Object.keys(emptyObj).length===0){
    console.log("object is empty");
    
}


//Nullish Coalsecing Operator (??): null undefine

//let Val1;
// val1=5??10
//val1 =null?? 10
// val1 =undefined ??15

// val1 =null ??10??15


// console.log (val1);


//Terniary Operator

//condition ? true :false