document.getElementById('playButton').addEventListener('click', function() {
    let mood = document.querySelector('input[name="mood"]:checked').value;
    console.log(getMusicPath(mood));

    let audio = new Audio(getMusicPath(mood));
    audio.play();

    document.getElementById('pauseButton').addEventListener('click', function() {
      if (audio) {
          audio.pause();
      }
    })

    function getMusicPath(mood) {
        if (mood === 'happy') {
            return 'audios/happy_song.mp3'; // Replace with the path to your happy song
        } else if (mood === 'sad') {
            return 'audios/sad_song.mp3'; // Replace with the path to your sad song
        } else if (mood === 'hype') {
            return 'audios/hype_song.mp3'
        } else if (mood === 'chill') {
            return 'audios/chill_song.mp3'
        }
    }
});
