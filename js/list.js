let songs = [
    {
        name: 'Dalla Dalla',
        src: 'songs/itzy/Dalla Dalla.mp3',
        cover: 'img/dalla dalla.jpeg',
        artist: 'ITZY',
        lyrics: '',
    },
    {
        name: 'Icy',
        src: 'songs/itzy/Icy.mp3',
        cover: 'img/icy.avif',
        artist: 'ITZY',
        lyrics: '',
    },
    {
        name: 'Cherry',
        src: 'songs/itzy/Cherry.mp3',
        cover: 'img/icy.avif',
        artist: 'ITZY',
        lyrics: '',
    },
    {
        name: 'Wannabe',
        src: 'songs/itzy/Wannabe.mp3',
        cover: 'img/wannabe.avif',
        artist: 'ITZY',
        lyrics: '',
    },
    {
        name: "That's A No No",
        src: "songs/itzy/That's A No No.mp3",
        cover: 'img/wannabe.avif',
        artist: 'ITZY',
        lyrics: '',
    },
    {
        name: 'Not Shy',
        src: 'songs/itzy/Not Shy.mp3',
        cover: 'img/not shy.avif',
        artist: 'ITZY',
        lyrics: '',
    },
    {
        name: "Don't Give A What",
        src: "songs/itzy/Don't Give A What.mp3",
        cover: 'img/not shy.avif',
        artist: 'ITZY',
        lyrics: '',
    },
    {
        name: 'SURF',
        src: 'songs/itzy/SURF.mp3',
        cover: 'img/not shy.avif',
        artist: 'ITZY',
        lyrics: '',
    },
];

function numformatter(num){
    return num >= 10 ? num.toString() : '' + num.toString();
}

$(document).ready(function() {
    songs.map((songs, i) => {
        var template = '<div class="songinfo" data-id="' +
        i +
        '"> <div class="song_num">'+
        numformatter(i+1)+
        '</div> <div style="position: relative;"> <img src="'+
        songs.cover+
        '" class="song_img" alt=""> </div> <div class="song_info"> <div class="song_name">'+
        songs.name+
        '</div> <div class="song_artist">'+
        songs.artist+
        '</div> </div> </div>';
        $('#list').append(template);
    });
});