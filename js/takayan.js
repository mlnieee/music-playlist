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
        "songs/jpop/takayan/True Intention.mp3",
        "songs/jpop/takayan/メンヘラって神じゃね？.mp3",
        "songs/jpop/takayan/らぶびーむ!!_ たかやん.mp3",
    ];

    const albumPhotos=[
        "img/jpop/true intention.jpg",
        "img/jpop/isnt menhera a god.jpeg",
        "img/jpop/love beam.jpeg",
    ];

    const trackNames=[
        "True Intention",
        "メンヘラって神じゃね？",
        "らぶびーむ!!_ たかやん",
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