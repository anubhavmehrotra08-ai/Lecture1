// artimetic Operators
// let a = 5;
// let b = 2;

// console.log("a = 5, b = 2" );
// console.log("a + b = ", a+b );
// console.log("a - b = ", a-b );
// console.log("a * b = ", a*b );
// console.log("a / b = ", a/b );
// console.log("a % b = ", a%b );  //modulus
// console.log("a ** b = ", a**b );  // exponentiation   5^2


//                           unary operator
// let a = 5;
// let b = 2;

// console.log("a = ",a,"& b = ", b );
// a++;  //or you can write this like this a = a+1;
// a--;   //or you can write this like this a = a-1;
// a++ , a-- (these are  post increment , decrement)
// --a , ++a ( these are pre decrement , increment)
// console.log("a++ = ", a++);

// console.log("a = ", a);

//                              asignment operators
// let a = 5;
// let b = 2;

// a += 4; //a = a+4
// console.log("a = ", a)

//                              comparision operators
// let a = 5;
// let b = "5";

// console.log("a !== b", a !== b)


// let a = 5;
// let b = 3;

// console.log("a >= b", a >= b)

// logical operators
// let a = 6;
// let b = 5;

// let cond1 = a<b;
// let cond2 = a===6;

// console.log("!(6<5) = ", !(a<b));

// console.log("cond1 || cond2 = ", cond1 || cond2 );

// console.log("cond1 && cond2 = ", a>b && a===5 );


// conditional statements

// let age = 18;
// let mode = "dark";
// let color;

// if (mode ==="dark"){
//     color ="black";
// }
// if (mode ==="light"){
//     color ="white";
// }
// console.log(color);
// if(age>=18){
//     console.log("you can vote");
// }
// if(age<18){
//     console.log("you cannot vote");
// }
// else{
//     console.log("you cannot vote");
// }

// let a = 5;
// if ( a%2 === 0 ){
//     console.log("number is even")
// }
// else{
//     console.log("number is odd")
// }

// syntax -> rules 

// let mode = "green";
// let color ;

// if ( mode === "red" ){
//     console.log("color is redish")
// }
// else if ( mode === "green"){
//     console.log(" color is greenish")
// }
// else if ( mode === "blue"){
//     console.log(" color is blueish")
// }
// else if ( mode === "pink"){
//     console.log(" color is pinkish")
// }
// else{
//     console.log("colorless")
// }

// if (mode === "green") console.log(mode);    a code can be written in this way also but dont write it in this way  



// let age = 17

// let result = age>= 18 ? "adult" : "not adult"

// // A SIMPERLER WAY TO WRITE IF ELSE AND TO USE IT

// console.log(result)

// let number = prompt("enter a number");

// if( number%5 === 0)(
//     console.log( number ," number is muliple of 5")
// )
// else(
//     console.log( number ," number is not muliple of 5")
// )

let score = prompt ("enter your score (0-100)");
let grade;

if (score >=80 && score <= 100){
    grade = "A";
}
else if (score >=70 && score <= 89){
    grade = "B";
}
else if (score >=60 && score <= 69){
    grade = "C";
}
else if (score >=50 && score <= 59){
    grade = "D";
}
else if (score >=0 && score <= 49){
    grade = "F";
}
console.log("according to your score, your grade was :" , grade);

