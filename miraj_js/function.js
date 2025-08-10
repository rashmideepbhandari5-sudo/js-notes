//function

// ==================================   function with Arguments and return value ==============================

const generate_result = (scimarks, mathmarks, engmarks,student_name) => //arguments
{
   let total_marks = scimarks+mathmarks+engmarks

   let per = (total_marks/300)*100

   let result =`the total marks the student ${student_name} is ${total_marks} and percentage is ${Math.round(per)}%`

   return result
} 

let rashmi_result = generate_result(100, 100, 100, "rashmi");

console.log(rashmi_result)


// ==================================   function with Arguments and no return value ==============================

const generate_result = (scimarks, mathmarks, engmarks,student_name) => //arguments
{
   let total_marks = scimarks+mathmarks+engmarks

   let per = (total_marks/300)*100

   console.log(`the total marks the student ${student_name} is ${total_marks} and percentage is ${Math.round(per)}%`)

} 

generate_result(100, 100, 100, "rashmi");


// ================================== function with no arguments ==============================

const getCurrentDateTime = () => {
  const now = new Date();
  let current_date_time = now.toLocaleString(); 
  alert(`the time and date is ${current_date_time}`)
}

getCurrentDateTime()

// ============================== Inline Function ==============================

// 👉 Definition:
// An **inline arrow function** is a short function written in a single line.
// It returns the result **automatically** without using curly braces `{}` or the `return` keyword.

// ✅ When to use:
// - When the function does only **one thing** (like a calculation or a return statement).
// - Makes code cleaner and shorter.
// - Useful for small logic like math, string formatting, condition checks, etc.

// ❌ Not used when:
// - The function has **multiple statements**, loops, or conditions, calculations — in that case, use curly braces `{}` and `return`.

// ----------------- Before (Normal Arrow Function with Body) -----------------
const add_num = (num1, num2) => {
  return num1 + num2;
};

let sum = add_num(1, 2);
alert(sum);

// // ----------------- After (Inline Arrow Function - No Body Needed) -----------------
const add_num_inline = (num1, num2) => num1 + num2;

let sum_inline = add_num_inline(1, 2);
alert(sum_inline);


// ============================== Function with Default Parameters ==============================

const calculator = (num1,num2,sign="+") => //if user dont give sign value by default it will set + in sign value
{

    if(sign=="+"){
        return `the sum of ${num1} and ${num2} is ${num1+num2}`
    }
    else if (sign=="-"){
       return`the subtraction of ${num1} and ${num2} is ${num1-num2}`
    }
    else if (sign=="*"){
         return`the multiply of ${num1} and ${num2} is ${num1*num2}`
    }
    else if (sign=="/"){
        if(num2==0){
            return`you cannot divide any number with 0`
        }
        else{ return`the division of ${num1} and ${num2} value is ${num1/num2}` }
    }
    else { return `sign is invalid`};

} 
let result = calculator(4,2);
console.log( result);

//======================================= Parameterized Function =====================================

const user_info = ({Name, Age, Gender}) =>
{
    document.write(`the Name is ${Name} Age is ${Age} and Gender is ${Gender}`)
}

user_info({"Age":26,"Name":"Rashmi"}) // we can pass value in any order


// ================================== Closure ===================================================================

// if any function returns another function we call it as a clousre

const Discount_Provider = (season,time) =>
{  
    return ()=>{
       for(let i=time; i>0; i--) {
       document.write(`the 50% offer for this ${season} is upto ${i} hours<br><br>`)
       }
       document.write(`<br><br>`)
    }
}

dashain_discount=Discount_Provider("Dashain_Festival",5)
dashain_discount()

tihar_discount=Discount_Provider("Tihar_Festival",4)
tihar_discount()

// ================================ IIFES (Immediately Invoked Function Expression) ======================================

// synyax = (anonymouns function)

((Name)=>{
   let i = 0;
    while (i<=10){
        document.write(`my name is ${Name} <br>`)
        i++
    }
}
)("Rashmi")

// use case if we want to run any sript during website load 

//======================================= Call Back Function ========================================

// if any function takes other function as a parameter then we call it as a Call Back Function

const show_output = (result) =>
{
   alert(`the result is ${result}`)
}   

const add = (num1,num2,fn) => // num1=1, num2=2, fn=show_output
{
    let sum = num1+num2
    fn(sum)  // show_output(sum)
}

add(1,2,show_output)

