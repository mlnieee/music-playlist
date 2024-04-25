let songs = [
    {
        name: 'Pretty U',
        src: 'songs/seventeen/Pretty U.mp3',
        cover: 'img/pretty u.avif',
        artist: 'SEVENTEEN',
        lyrics: '',
    },
    {
        name: 'Healing',
        src: 'songs/seventeen/Healing.mp3',
        cover: 'img/healing.avif',
        artist: 'SEVENTEEN',
        lyrics: '',
    },
    {
        name: 'To You',
        src: 'songs/seventeen/To You.mp3',
        cover: 'img/to you.avif',
        artist: 'SEVENTEEN',
        lyrics: '',
    },
    {
        name: 'Rock With You',
        src: 'songs/seventeen/Rock With You.mp3',
        cover: 'img/to you.avif',
        artist: 'SEVENTEEN',
        lyrics: '',
    },
    {
        name: 'Darl+ing',
        src: 'songs/seventeen/Darling.mp3',
        cover: 'img/darling.avif',
        artist: 'SEVENTEEN',
        lyrics: '',
    },
    {
        name: 'Hot',
        src: 'songs/seventeen/Hot.mp3',
        cover: 'img/darling.avif',
        artist: 'SEVENTEEN',
        lyrics: '',
    },
    {
        name: 'Circles',
        src: 'songs/seventeen/Circles.mp3',
        cover: 'img/circles.avif',
        artist: 'SEVENTEEN',
        lyrics: '',
    },
    {
        name: '_WORLD',
        src: 'songs/seventeen/WORLD.mp3',
        cover: 'img/circles.avif',
        artist: 'SEVENTEEN',
        lyrics: '',
    },
    {
        name: 'CHEERS',
        src: 'songs/seventeen/CHEERS.mp3',
        cover: 'img/circles.avif',
        artist: 'SEVENTEEN',
        lyrics: '',
    },
    {
        name: '今 - 明日 世界が終わっても',
        src: 'songs/seventeen/japanese.mp3',
        cover: 'img/japanese.avif',
        artist: 'SEVENTEEN',
        lyrics: '',
    },
    {
        name: 'God Of Music',
        src: 'songs/seventeen/God Of Music.mp3',
        cover: 'img/god of music.avif',
        artist: 'SEVENTEEN',
        lyrics: '',
    },
    {
        name: 'Yawn',
        src: 'songs/seventeen/Yawn.mp3',
        cover: 'img/god of music.avif',
        artist: 'SEVENTEEN',
        lyrics: '',
    },
    {
        name: 'Headliner',
        src: 'songs/seventeen/Headliner.mp3',
        cover: 'img/god of music.avif',
        artist: 'SEVENTEEN',
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
