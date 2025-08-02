// =====================================Objects================================
// 1) create
// 2) read
// 3) update
// 4) delete

//===================================Create========================================
// 1) new Object(); -es5
// 2) {} -es6

let student_info = {
  Name: "rashmi bhandari",
  age: 20,
  obtained_marks: 250,
  total_marks: 300,
  percentage: () => {
    return (student_info.obtained_marks / student_info.total_marks) * 100;
  },
  biography: () =>
    `my name is ${student_info.Name} and my age is ${student_info.age}`, // sameobjectname baat nikalna milxa es6
  fav_things: {
    food: "momo",
    game: "pubg",
    sports: "badminton",
    color: "blue",
  },
};

// =====================================read===========================================

// we read it by (.) operator

// i want name and age
console.log(student_info.Name, student_info.age)

// i want biography
console.log(student_info.biography()) //since its storing function we are calling

//i want percentage to print in aler
let percentage =student_info.percentage()
console.log(percentage)
alert(`the percentage is ${Math.floor(percentage)}%`)

//to get fav color
console.log(student_info.fav_things.color)

// ========================================Update value=====================================

//to change name into rashmi deep bhandari

student_info.Name ="Rashmi deep Bhandari"

// check the update
console.log(student_info)

// ================================= delete items =======================================
// 1) hard delete
// 2) object destructuring - make a copy what we want

//hard delete
delete student_info.age;
console.log(student_info);

// object destructuring

let { Name, obtained_marks, ...remaining } = student_info; // name vanni xutai variable ma name aayo,
// obtain_marks vanni xutai variable ma obtain_marks aayo
// remaining vanni xutai variable ma sabai baki objects aay
console.log(Name);
console.log(obtained_marks);
console.log(remaining);

