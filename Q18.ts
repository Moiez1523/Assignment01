var places = ["London", "Paris", "Egypt", "Dubia", "Turkey"];
console.log(places);
// Printing array in Alphabatical order without modifying the actual list.
console.log(places[3] + " ," + places[2] + ", " + places[0] + ", " + places[1] + ", " + places[4]);
console.log(places);

// Printing array in reverse alphabatical order without modifying the actual list of array.
console.log(places[4] + " ," + places[1] + ", " + places[0] + ", " + places[2] + ", " + places[3]);
console.log(places);

// Revsersing the order of the array list. 
places.reverse();
console.log(places);

// Reversing again to make it to it's orignal order... 
places.reverse();
console.log(places);

// Sorting the array in Alphabatical order...
console.log("Alphabatical Order: ");
places.sort();
console.log(places);

// Reverse Sorting
places.reverse();
console.log(places);
