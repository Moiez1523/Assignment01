let guest= ["Hassan Ali","Shadab Khan","Babar Azam","Rizwan"];
let message = "you are invited to the dinner";
console.log(message+" "+guest[0]);
console.log(message+" "+guest[1]);
console.log(message+" "+guest[2]);
console.log(message+" "+guest[3]);

console.log("\n" + guest[1] + " not accept the invitation");
guest[1] = "Moiez Bilal";
console.log("New list is\n");
console.log(message+" "+guest[0]);
console.log(message+" "+guest[1]);
console.log(message+" "+guest[2]);
console.log(message+" "+guest[3]);

// we can also print the whole list using for loop...
// for(let i=0;i<4;i++){
//     console.log(guest[i]);
// }
