// for of

//["","",""]
//[{},{},{}]
// for each lopp

const arr= [1,2,3,4,5]
for( const num of arr){
    console.log(num);
    

}
const greeting ="hellow world"
for(const greet of greeting){
    console.log(`Each char is ${greet}`)
}

const map =new Map()
map.set('In',"India")
map.set('USA',"United state of America")
map.set('Fr',"France")

for(const [key,value]of map){
    console.log(key,`:-`,value);
    
}

// const myObject ={
//     game1 :'NfS',
//     game2: 'GTA 5'
// }
// //it show error
// for(const [key,value] of myObject){
//     console.log(key,`:-`,value);
    
// }

//map ar enot iterable
// for(const key in map){
//     console.log(map[key]);
    
// }