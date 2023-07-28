let current_users = ["MOIEZ","slman","ali","khalid","sunny"];
let new_users = ["bilal","azib","moiez","ahmad","sunny"];
let check;
let Case1;
let Case2;
for(let i=0;i<new_users.length;i++){
    // Case1 = current_users[i].toUpperCase;
    // Case2 = new_users[i].toUpperCase;
    for(let index=0;index<current_users.length;index++){
    if(new_users[i]==current_users[index]){
        check = current_users[index];
        // if(Case1 == Case2){
        //     console.log("Shouldn't Accepted");
        //     break;
        // }
        console.log(`username ${new_users[i]} is not available, enter a new username`);
        break;
    }
}
if(new_users[i]!= check){
 console.log(`username ${new_users[i]} is available`);
    }
}
    
