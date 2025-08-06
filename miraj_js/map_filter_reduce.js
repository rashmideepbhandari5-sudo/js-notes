//=======================map================================

let mynum =[1,2,3,4,5,6,7]      // for loop la return gardaina but map la garxa rw naya array pani banauxa

let new_num=mynum.map((num)=>{
    return num+1;
})


console.log(new_num)



//===========================filter===============================================
let my_num =[1,2,3,4,5,6,7,8,9,10]

let value = my_num.filter((x)=> {
    return x % 2 == 0;
});
console.log(value)



let Mynum =[1,2,3,4,5,6,7,8,9,10]

let data =Mynum.filter((x)=>{
    return x % 3 == 0;
})
console.log(data)


//==============================reduce=========================================
let number = [ 1,2,3,4,5,6,7,8,9,10]
let dataa =number.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(dataa)


let numberr = [ 1,2,3,4,5,6,7,8,9,10]
let dataaa =number.reduce((h1,h2)=>{
    return h1-h2;
})
console.log(dataaa)