let guest = ["Hassan Ali","Moiez Bilal","Babar Azam","Rizwan"];
console.log("More guests are comming for the dinner!!!");
guest.unshift("Afridi"); // adding element at the start of array
guest.splice(2,0,"Anwar"); // adding element at the specified index of the array
guest.push("Shaheen Afridi"); // adding element at the last index of the array

console.log(guest); // append method not work with arrays...

// We can also access the array using for loop...
console.log(guest[0] + " you are invited to the dinner");
console.log(guest[1] + " you are invited to the dinner");
console.log(guest[2] + " you are invited to the dinner");
console.log(guest[3] + " you are invited to the dinner");
console.log(guest[4] + " you are invited to the dinner");
console.log(guest[5] + " you are invited to the dinner");
console.log(guest[6] + " you are invited to the dinner");