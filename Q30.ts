let log = ["Admin","Ahmad","Ali","Fasil","Shahid"];
for(let i=0;i<log.length;i++){
    if(log[i]=="Admin"){
    console.log(`Hello ${log[i]}, would you like to see a status report`);
    }
    else{
        console.log(`Hellow ${log[i]} thank you for logging again.`);
    }
}