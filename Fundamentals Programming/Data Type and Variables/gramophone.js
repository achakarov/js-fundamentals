function gramophone(bandName, albumName, songName) {

    let songDurationSeconds = (albumName.length * bandName.length) * songName.length / 2;

    let rotationsNum = Math.ceil(songDurationSeconds / 2.5);

    console.log(`The plate was rotated ${rotationsNum} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')