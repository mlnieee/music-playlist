function validateEmail(){
    var email=document.getEelementById("email");

    if(email.trim()===""){
        emailError.innerHTML="Email is required.";
    }else{
        emailError.innerHTML="";
    }
}

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
        "songs/newjeans/Attention.mp3",
        "songs/newjeans/Hype Boy.mp3",
        "songs/newjeans/Cookie.mp3",
        "songs/newjeans/Hurt.mp3",
        "songs/newjeans/Ditto.mp3",
        "songs/newjeans/OMG.mp3",
        "songs/newjeans/Zero.mp3",
        "songs/newjeans/NewJeans.mp3",
        "songs/newjeans/Super Shy.mp3",
        "songs/newjeans/ETA.mp3",
        "songs/newjeans/Cool With You.mp3",
        "songs/newjeans/ASAP.mp3",
    ];

    const albumPhotos=[
        "img/first.jpg",
        "img/first.jpg",
        "img/first.jpg",
        "img/first.jpg",
        "img/ditto.jpg",
        "img/omg.jpg",
        "img/zero.jpg",
        "img/second.jpg",
        "img/second.jpg",
        "img/second.jpg",
        "img/second.jpg",
        "img/second.jpg",
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
        const trackName=trackList[trackIndex];
        const cleanedTrackName = trackName.replace("songs/newjeans/","");
        trackNameDisplay.textContent=cleanedTrackName;
        albumPhoto.src = albumPhotos[trackIndex];
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