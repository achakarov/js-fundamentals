function songs(array) {

    let clonedArray = array.slice(); 
    let numberOfSongs = Number(clonedArray.shift()); 
    let typeSong = clonedArray.pop(); 

    class Song {
        constructor(type, name, time) {
            this.type = type; 
            this.name = name; 
            this.time = time; 
        }
    }
    let songsArray = []; 

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = clonedArray[i].split("_"); 
        let song = new Song(type,name,time); 
        songsArray.push(song); 

    }

    if (typeSong === "all") {
        songsArray.forEach((i) => console.log(i.name));  
    } else {
        let filtered = songsArray.filter((i) => i.type === typeSong); 
        filtered.forEach((i) => console.log(i.name)); 
    }
    
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
)