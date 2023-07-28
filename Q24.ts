let person = "male";
const check = person == "male"? "True":"False";
console.log(person +" " + check);


// Check weather the string is in lower case or upper case by using "isLowerCase" function.
let Employee = "SUBHAN KHALID";
function isLowerCase(value){
value = Employee.toUpperCase;
if(value == Employee){
    console.log("UpperCase");
}
else{
    console.log("lowerCase");
}
}
isLowerCase(Employee);

// Numerical Testing
let num1 =2,num2=34;
function numCheck(value1,value2){
if (value1 == value2){
console.log(`${num1} and ${num2} are equal"`);
}
else if(value1 < value2){
    console.log(`${value1} is smaller than ${num2}`);
}
else if(value1 > value2){
    console.log(`${value1} is greater than ${num2}`);
    
}
}
numCheck(num1,num2);

// logical Operators
let stu1 = 4,stu2 = 6;
function stuCheck(value1, value2){
    if(stu1 && stu2 == 5){
        console.log("Both are 5th class students");
    }
    else if(stu1 ==5 || stu1 == 5 ){
        console.log("One of them is in 5th class");
    }
    else{
        console.log("Both are not in 5th class students");
    }
}
stuCheck(stu1,stu2);

// Checking array element (exist or not)...
let Students = ["Asgar","Ahmad","Rizwan","Rehan","Bilal"];
let StudentCheck="Bilal";
for(let i=0;i<Students.length;i++){
    if(Students[i]==StudentCheck){
        console.log("Match Found: Item is in the array");
    }
    if(Students[i]!=StudentCheck){
        console.log("Checking array value : Not Found ");
    }
}
