// Ordinal Numbers: representing the position...
let Ordinal  = [1,2,3,4,5,6,7,8,9];
for(let i=0;i<Ordinal.length;i++){
   if(Ordinal[i]==Ordinal[0]){
    console.log("1st");
   }
   else if(Ordinal[i] == Ordinal[1]){
    console.log("2nd");
   }
   else if(Ordinal[i] == Ordinal[2]){
    console.log("3rd");
   }
   else if(Ordinal[i] == Ordinal[3]){
    console.log("4th");
   }
   else if(Ordinal[i] == Ordinal[4]){
    console.log("5th");
   }
   else if(Ordinal[i] == Ordinal[5]){
    console.log("6th");
   }
   else if(Ordinal[i] == Ordinal[6]){
    console.log("7th");
   }
   else if(Ordinal[i] == Ordinal[7]){
    console.log("8th");
   }
   else if(Ordinal[i] == Ordinal[8]){
    console.log("9th");
   }
   else{
    console.log("9th");
   }
}

// Same solution with concise code..
for(let i=0;i<Ordinal.length;i++){
    console.log(Ordinal[i]);
}