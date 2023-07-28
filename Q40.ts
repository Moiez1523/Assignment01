function make_album(artist:string,title:string,count=0){
let obj ={
    artist: artist,
    title:  title,
    totalTracks: count,
    // song1 : "Tery bin",
    // song2 : "Gulabi ankhy",
    // song3 : "Adat"
}
return console.log(obj);
}
make_album("Atif Aslam","Sad-Songs",3);
make_album("Arjit Singh","Romantic");
make_album("Nusrat","Qawali-life");
