var Name = "Moiez Bilal";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
// changing text into titleCase
let Message = "This is the message that we have to change into title format";

function titleCase(msg){
   return msg.split(" ").map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(" ");
}
console.log(titleCase(Message));
console.log(titleCase(Name));