// console.log('hey JS,show your girl some love');
// alert('let us get started');
// //variables:
// let age=22;
// let year=2020;
// console.log(age,year);

// //creating a constant variable:
// const points=100;
// console.log(points);

//strings:
// console.log('hello world');
// let email1='angelanelima98@gmail.com';
// console.log(email1);

// // //string concatenation(joining things together)

//  let firstName = 'Angela'; 
//  let lastName = 'Nelima';
//  let fullName = firstName +  ' ' + lastName;
//  console.log(fullName); 

// //getting characters
// console.log(fullName[0]);   

// //getting string length
// console.log(fullName.length);

//string methods
// console.log(fullName.toUpperCase());
// let result=fullName.toLowerCase();
// console.log(result, fullName);
// //methods at times dont alter original values ie in this scenario
// let index= email.indexOf('@');
// console.log(index); 


// let email='ella@melina.com';
// let result1= email.lastIndexOf('a');
// console.log(result1);


// //NaN rep Not a Number
// console.log(5 /'hello');


/*let email = "mario@thenetninja.co.uk";

let result1 = email.slice(4,10);

console.log(result1);

let result2 = email.substr(4,10);

console.log(result2)

//replacement
/*let result= email.replace('m' ,'w');
console.log(result);*/

//replacement is only done to the first letter
//let result=email.replace('n' ,'w');
//console.log(result);//

//numbers
/*let radius=10;
const pi=3.14;
console.log(radius, pi);*/

/*math operations
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement*/



/*=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y */

/*console.log(10 /2);
let result=radius % 3;
console.log(result);
let likes=10;
likes++;
console.log(likes);  


//concatenating strings

let text1=('what a very day');
text1 +='nice day';
console.log(text1);*/

/*const title= 'Best reads of 2021';
const author = 'Angie Melina';
const likes =2101;

//template string way

let result= `The blog called ${title} written by ${author} has ${likes} likes`;  
console.log(result);



let html= `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>

`;
console.log(html);*/

//arrays
/*let ninjas = ['Callie', 'Hillary', 'Claudius'];
let result=ninjas.sort();

console.log (ninjas);*/

/*ninjas[1]='Alicia';
console.log(ninjas[1]);

let marks=[80,90,88,76];
console.log(marks[0]);

let random= ['Ella', 'Elle',  'Ailley', 1,2,3];
console.log(random);
console.log(random.length);*/

//array methods
//this method puts commas or whatever punctuation used in the string  or rather the given data type
//indexOf gives the position a data type holds
//push returns the length of the array 

 
//let result= ninjas.join(',');
//let result= ninjas.join('-');

//let result= ninjas.indexOf("Hillary");

//let result=ninjas.concat('Angie' , 'Ash');

/*let result=ninjas.push('Liz');
result1 = ninjas.indexOf("Hillary") */
/*let result=ninjas.push('Liz');
result= ninjas.pop();
console.log(result);*/


//Booleans

/*let email='angelanelima@gmail.com';
let result= email.includes('@');
console.log(result);*/

/*let names=('nelima' ,'callie' ,'alicia');
let result= names.includes('alicia');
console.log(result);*/

//comparison operators

 //let age=90;
 //console.log(age ==90);
 //console.log(age ==91);

 //An exclamation mark negates a statement

 //console.log(age !=90);

 //console.log(age>85);
 //console.log(age<85);
 //console.log(age<=90);
 //console.log(age>=90 );
/*let name='nelima';
console.log(name=='nelima');
console.log(name=='Nelima');

//later in the alphabet is always greater than earlier in the alphabet

console.log('nelima'>'callie');

//lowercase letters are greater than uppercase letters
console.log(name>'Nelima');
console.log(name>'Calystus');*/

// let age= 25;
// console.log(age == 25);
 //the string '25' is converted into a number by javascript before being evaluated
 //console.log(age=='25');
 //console.log(age !='25');
 //console.log(age != 25);

 //=== is known as strict equqlity

 //console.log( age===25);
 //console.log( age=== '25');

// console.log( age !==25);
 //console.log( age !== '25');

 //type conversion

 //let score= '100';
 //console.log(score + 1);

 //concatenation will take place like in the example above unless the string is convertted into a number
// score= Number(score);
 //console.log(score + 1);
 //console.log(typeof score);

 //let result= Number('100');
 //console.log(result);

 //let result= String(50);
 //console.log(result , typeof result); 

 //converting into Boolean

//let result=Boolean(100);
//console.log(result , typeof result); 

//zeroa(0) are considered as falsey
//let result=Boolean(0);
 //console.log(result , typeof result); 

 //string Boolean
 //let result=Boolean('0');
 //console.log(result , typeof result); 

 //an empty string is a falsey
 //let result=Boolean('');
 //console.log(result , typeof result); 


 //for loop

 /*for( let i=0; i<5; i++){
     console.log('in loop:', i);
 }
console.log('loop finished');*/

/*const names=['shaun', 'mario','luigi'];
for( let i=0; i < names.length; i++){
    console.log(i); 
}*/

/*const names=['shaun', 'mario','luigi','hujo','viv'];
for( let i=0; i<names.length; i++){
   // console.log(names[i]); 
}

let html= `<div>${names[i]}</div>`;
console.log( html );}*/


//for (let i = 0; i<5; i++){
  //  console.log('in loop: ' i);

//}
//console.log('loop finished');//

//while loop

/*for (let i=0; i<5; i++){
    console.log('in loop:',i); 
}*/
/*let i=0;
while (i < 5 ){
    console.log ('in loop:',i);
    i++;
}*/

/*const names=['shaun', 'mario', 'luigi'];
let i=0 ;
while( i<names.length){
    console.log(names[i]);
    i++;
}*/

//do while loops

/*let i = 5;
do{
    console.log('val of 1 is:', i);
    i++;
}while(i<5);*/

//conditional or if statements

/*const age=25 ;
if(age>20){
    console.log('you are over 20 years old')
}*/

/*const ninjas=['ash', 'viv', 'cal', 'reg'];
(ninjas.length > 3)
    console.log("that's a lot of ninjas")*/


   /* const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

    let text = "";
    for (let i = 0; i < cars.length; i++) {
      text += cars[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;*/

    /*const password='pass';
    if(password.lenth >= 8){
        console.log('that password is long enough!') ;
    }*/

    /*const password="p@ssword";
    if (password.length >= 8){
        console.log('password is long enough!');
    }*/

    //else if statements

   /* const password='pass';
    if (password>=8){
        console.log('password is long enough!');
    }else{ 
        console.log("password is not long enough!");
    }  */

    /*const password='password12345';
    if (password.length >=12){
        console.log('this password is mighty strong');
    }else if(password.length>=8){
        console.log('this password is strong');
    }else{
        console.log('this password is not long enough');
    }
    {

    }*/

    /*const password='password ';
    if (password.length >=12){
        console.log('this password is mighty strong');
    }else if(password.length>=8){
        console.log('this password is strong');
    }else{
        console.log('this password is not long enough');
    }
    {
 
    }*/

    //logical operators- OR|| and AND &&

    /*const password='p@ssword123456';
    if(password.length >= 12 && password.includes('@')){
        console.log('that password is mighty strong');
    }else if(password.length >=8){
        console.log('that password is long enough!');
        } else{
            console.log('password is not long enough');
        }*/
    

       /* const password='p@ssword';
    if(password.length >= 12 && password.includes('@')){
        console.log('that password is mighty strong');
    }else if(password.length >=8 || password.includes('@')){
        console.log('that password is strong enough!');
        } else{
            console.log('password is not strong enough');
        }*/

        /*const password='p@ss';
    if(password.length >= 12 && password.includes('@')){
        console.log('that password is mighty strong');
    }else if(password.length >=8 || password.includes('@') && password.length > 5){
        console.log('that password is strong enough!');
        } else{
            console.log('password is not strong enough');
        }*/

        //logical NOT(!)
        let user=false;
        if(!user){
            console.log('you must be logged in to continue');
        }
        console.log(!true);
        console.log(!false);


    //break and continue - gets you out of the loop

const scores=[50, 25, 0, 30, 100, 20, 10];
for (let i=0; i< scores.length;i++){
    console.log('your score: ',scores[i]);
    if(scores[i]===100){
        console.log('congrats,you got the top score!');
        break;
    }
}