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
        "songs/jpop/andteam/Under the skin.mp3",
        "songs/jpop/andteam/Scent of you.mp3",
        "songs/jpop/andteam/BUZZ LOVE.mp3",
        "songs/jpop/andteam/The Final Countdown - andTeam ver.mp3",
        "songs/jpop/andteam/W.O.L.F.(Win Or Lose FIght.mp3",
        "songs/jpop/andteam/Blind Love.mp3",
        "songs/jpop/andteam/FIREWORK.mp3",
        "songs/jpop/andteam/Road Not Taken.mp3",
        "songs/jpop/andteam/War Cry.mp3",
        "songs/jpop/andteam/Dropkick.mp3",
        "songs/jpop/andteam/Reallu Crazy.mp3",
        "songs/jpop/andteam/ALIEN.mp3",
        "songs/jpop/andteam/The moon is beautiful.mp3",
    ];

    const albumPhotos=[
        "img/jpop/under the skin.jpg",
        "img/jpop/under the skin.jpg",
        "img/jpop/under the skin.jpg",
        "img/jpop/under the skin.jpg",
        "img/jpop/wolf.jpg",
        "img/jpop/blind love.jpeg",
        "img/jpop/firework.jpg",
        "img/jpop/firework.jpg",
        "img/jpop/war cry.jpeg",
        "img/jpop/war cry.jpeg",
        "img/jpop/war cry.jpeg",
        "img/jpop/war cry.jpeg",
        "img/jpop/war cry.jpeg",
    ];

    const trackNames=[
        "Under the skin",
        "Scent of you",
        "BUZZ LOVE",
        "The Final Countdown-&TEAM ver.",
        "W.O.L.F.(Win Or Lose Fight)",
        "Blind Love",
        "FIREWORK",
        "Road Not Taken",
        "War Cry",
        "Dropkick",
        "Really Crazy",
        "ALIEN",
        "The moon is beautiful",
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