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
        "songs/pop/conan gray/Comfort Crowd.mp3",
        "songs/pop/conan gray/Wish You Were Sober.mp3",
        "songs/pop/conan gray/Maniac.mp3",
        "songs/pop/conan gray/Fight or Flight.mp3",
        "songs/pop/conan gray/Heather.mp3",
        "songs/pop/conan gray/The Story.mp3",
        "songs/pop/conan gray/Fake.mp3",
        "songs/pop/conan gray/Astronomy.mp3",
        "songs/pop/conan gray/Movies.mp3",
        "songs/pop/conan gray/Best Friend.mp3",
        "songs/pop/conan gray/Yours.mp3",
        "songs/pop/conan gray/Memories.mp3",
        "songs/pop/conan gray/Killing Me.mp3",
        "songs/pop/conan gray/Found Heaven.mp3",
        "songs/pop/conan gray/Fainted Love.mp3",
        "songs/pop/conan gray/Lonely Dancers.mp3",
        "songs/pop/conan gray/Alley Rose.mp3",
        "songs/pop/conan gray/The Final Fight.mp3",
        "songs/pop/conan gray/Eye Of The Night.mp3",
        "songs/pop/conan gray/Winner.mp3",
    ];

    const albumPhotos=[
        "img/pop/comfort crowd.jpeg",
        "img/pop/comfort crowd.jpeg",
        "img/pop/comfort crowd.jpeg",
        "img/pop/comfort crowd.jpeg",
        "img/pop/comfort crowd.jpeg",
        "img/pop/comfort crowd.jpeg",
        "img/pop/fake.jpg",
        "img/pop/astronomy.jpg",
        "img/pop/movies.jpg",
        "img/pop/movies.jpg",
        "img/pop/movies.jpg",
        "img/pop/movies.jpg",
        "img/pop/killing me.jpg",
        "img/pop/found heaven.jpg",
        "img/pop/found heaven.jpg",
        "img/pop/found heaven.jpg",
        "img/pop/found heaven.jpg",
        "img/pop/found heaven.jpg",
        "img/pop/found heaven.jpg",
        "img/pop/found heaven.jpg",
    ];

    const trackNames=[
        "Comfort Crowd",
        "Wish You Were Sober",
        "Maniac",
        "Fight or Flight",
        "Heather",
        "The Story",
        "Fake",
        "Astronomy",
        "Movies",
        "Best Friend",
        "Yours",
        "Memories",
        "Killing Me",
        "Found Heaven",
        "Fainted Love",
        "Lonely Dancers",
        "Alley Rose",
        "The Final Fight",
        "Eye Of The Night",
        "Winner",
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