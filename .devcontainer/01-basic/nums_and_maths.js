const score=400
//console.log(score);


const balance =new Number (100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2))


const otherNumber=23.9966

//console.log(otherNumber.toPrecision(3));


const hundered =1000000
//console.log(hundered.toLocaleString('en-IN'))
//alert("hellow")

//++++++++++++++++maths++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4, 3,4,6));
// console.log(Math.max(4, 3,4,6));

// math.random always provid value b/w 0 and 1
console.log(Math.random());

//maths.floor its provid value in int 
console.log(Math.floor(Math.random()*10)+1);

const min =10
const max =20
// in this we add min in end so over range value we get easily
// //example value should be greater than 10
console.log(Math.floor(Math.random()*(max-min+1))+min)