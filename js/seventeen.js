document.addEventListener("DOMContentLoaded", function () {
    const audio=document.getElementById("audio");
    const playPauseButton=document.getElementById("play-pause");
    const prevButton=document.getElementById("back");
    const nextButton=document.getElementById("next");
    const volumeControl=document.getElementById("vol");
    const trackSlider=document.getElementById("track-slider");
    const currentTimeDisplay=document.getElementById("current-time");
    const totalDurationDisplay=document.getElementById("total-duration");
    const trackNameDisplay=document.getElementById("nameDisplay");
    const albumPhoto=document.getElementById("album-photo");

    let isPlaying = true;
    let currentTrack = 0;
    let audioPosition = 0;

    const trackList=[
        "songs/seventeen/Pretty U.mp3",
        "songs/seventeen/Healing.mp3",
        "songs/seventeen/To You.mp3",
        "songs/seventeen/Rock With You.mp3",
        "songs/seventeen/Darling.mp3",
        "songs/seventeen/Hot.mp3",
        "songs/seventeen/Circles.mp3",
        "songs/seventeen/WORLD.mp3",
        "songs/seventeen/CHEERS.mp3",
        "songs/seventeen/japanese.mp3",
        "songs/seventeen/God Of Music.mp3",
        "songs/seventeen/Yawn.mp3",
        "songs/seventeen/Headliner.mp3",
    ];

    const albumPhotos=[
        "img/pretty u.avif",
        "img/healing.avif",
        "img/to you.avif",        
        "img/to you.avif",
        "img/darling.avif",
        "img/darling.avif",
        "img/circles.avif",
        "img/circles.avif",
        "img/circles.avif",
        "img/japanese.avif",
        "img/god of music.avif",
        "img/god of music.avif",
        "img/god of music.avif",
    ];

    const trackNames=[
        "Pretty U",
        "Healing",
        "To You",
        "Rock With You",
        "Dar+ling",
        "Hot",
        "Circles",
        "_WORLD",
        "CHEERS",
        "今 - 明日 世界が終わっても",
        "God of Music",
        "Yawn",
        "Headliner",
    ];

    function togglePlayPause(){
        if (!isPlaying){
            if (audioPosition === 0){
                audio.src=trackList[currentTrack];
            }
            audio.load();
            audio.currentTime=audioPosition;
            audio
            .play()
            .then(( ) => {
                playPauseButton.textContent="▐▐ ";
                isPlaying = true;
                updatenameDisplay(currentTrack);
            })
            .catch((error) => {
                console.error("Audio Playback Error: " + error.message);
            });
        } else {
            audioPosition = audio.currentTime;
            audio.pause();
            playPauseButton.textContent = "▶";
            isPlaying=false;
        }
    }

    playPauseButton.addEventListener("click", togglePlayPause);

    nextButton.addEventListener("click",function(){
        if(currentTrack < trackList.length - 1){
            currentTrack++;
        } else {
            currentTrack=0;
        }
        playTrack(currentTrack);
    });

    prevButton.addEventListener("click", function (){
        if (currentTrack >  0){
            currentTrack--;
        } else {
            currentTrack = trackList.length - 1;
        }
        playTrack(currentTrack);
    });

    function playTrack(trackIndex){
        audio.src=trackList[trackIndex];
        audio.load();
        audio.play();
        playPauseButton.textContent="▐▐";
        isPlaying=true;
        updateTrackName(trackIndex);
    }

    function updateTrackName(trackIndex){
        const trackName=trackNames[trackIndex];
        trackNameDisplay.textContent= trackName;
        albumPhoto.src=albumPhotos[trackIndex];
    }

    volumeControl.addEventListener("input", function (){
        audio.volume = volumeControl.value;
    });

    audio.addEventListener("timeupdate", function() {
        const currentTime = formatTime(audio.currentTime);
        const totalDuration = formatTime(audio.duration);
        currentTimeDisplay.textContent = currentTime;
        totalDurationDisplay.textContent = totalDuration;

        const position = (audio.currentTime / audio.duration) * 100;
        trackSlider.value = position;
    });

    trackSlider.addEventListener("input", function() {
        const newPosition = (trackSlider.value / 100) * audio.duration;
        audio.currentTime = newPosition;
    });

    audio.addEventListener("ended", function () {
        if (currentTrack < trackList.length - 1) {
            currentTrack++;
        } else {
            currentTrack=0;
        }
        playTrack(currentTrack);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10? "0" : ""}${remainingSeconds}`;
    }
})
