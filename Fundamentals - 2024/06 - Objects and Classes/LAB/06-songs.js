function songs(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songCount = input.shift();
    let songType = input.pop();
    let songs = [];
    for (let i = 0; i < songCount; i++) {
        let curSong = input[i].split('_');
        let [type, name, time] = curSong;
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (songType === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filteredSong = songs.filter((i) => i.type === songType);
        filteredSong.forEach((i) => console.log(i.name));
    }
}

// songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);

// songs([
//     4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater'
// ]);

songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);