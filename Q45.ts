function information(manufacturer:string,model:string,arbitrary_number:number,color:string,features:string){
let obj = {
    manufacturer: manufacturer,
    model: model,
    arbitrary_number: arbitrary_number,
    color: color,
    features: features
}
return console.log(obj);
}
information("Honda","Civic",4,"Black","XR full confortable");