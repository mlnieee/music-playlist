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
        "songs/itzy/Dalla Dalla.mp3",
        "songs/itzy/Icy.mp3",
        "songs/itzy/Cherry.mp3",
        "songs/itzy/Wannabe.mp3",
        "songs/itzy/That's A No No.mp3",
        "songs/itzy/Not Shy.mp3",
        "songs/itzy/Don't Give A What.mp3",
        "songs/itzy/SURF.mp3",
        "songs/itzy/Loco.mp3",
        "songs/itzy/Twenty.mp3",
        "songs/itzy/Sneakers.mp3",
        "songs/itzy/Boys Like You.mp3",
        "songs/itzy/Cheshire.mp3",
    ];

    const albumPhotos=[
        "img/dalla dalla.jpeg",
        "img/icy.avif",
        "img/icy.avif",
        "img/wannabe.avif",
        "img/wannabe.avif",
        "img/not shy.avif",
        "img/not shy.avif",
        "img/not shy.avif",
        "img/loco.avif",
        "img/loco.avif",
        "img/sneakers.avif",
        "img/boys like you.avif",
        "img/boys like you.avif",
    ];

    const trackNames=[
        "Dalla Dalla",
        "Icy",
        "Cherry",
        "Wannabe",
        "That's A No No",
        "Not Shy",
        "Don't Give A What",
        "SURF",
        "Loco",
        "#Twenty",
        "Sneakers",
        "Boys Like You",
        "Cheshire",
    ]

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
