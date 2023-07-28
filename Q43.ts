let magicians = ["Ali","Afzal","Asgar","Sultan"];
let array = new Array;
array = magicians;
function show_magicians(mag){
    return console.log(magicians);
}
function make_great(){
for(let i=0;i<magicians.length;i++){
    magicians[i] = `Great ${magicians[i]}`;
}
}
show_magicians(array);
make_great();
show_magicians(magicians);