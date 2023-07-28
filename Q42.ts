let magicians = ["Ali","Afzal","Asgar","Sultan"];
function show_magicians(mag){
    return console.log(magicians);
}
function make_great(){
for(let i=0;i<magicians.length;i++){
    magicians[i] = `Great ${magicians[i]}`;
}
}
make_great();
show_magicians(magicians);