let guest = ["Hassan Ali","Moiez Bilal","Babar Azam","Rizwan"];
console.log("More guests are comming for the dinner!!!");
guest.unshift("Afridi"); 
guest.splice(2,0,"Anwar"); 
guest.push("Shaheen Afridi");

console.log(guest);

console.log("Alert: Because of some problem we are able to invite only Two person for the dinner!!!");
guest.pop(); // pop function used to remove/delete the last element of the array..
console.log(guest);
console.log("Sorry Shaeen Afridi you are not invited to the dinner!!!");
guest.pop();
console.log("Sorry Rizawan you are not invited to the dinner!!!");
guest.pop();
console.log("Sorry Babar Azam you are not invited to the dinner!!!");
guest.pop();
console.log("Sorry Moiez Bilal you are not invited to the dinner!!!");
guest.pop();
console.log("Sorry Anwar you are not invited to the dinner!!!");

// confirmation message...
console.log(guest[0] + " ," + guest[1] + " you are still invited to the dinner");
guest.pop();
guest.pop();
console.log(guest); // Empyt list 