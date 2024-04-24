let songs = [
    {
        name: 'Attention',
        src: 'songs/newjeans/Attention.mp3',
        cover: 'img/first.jpg',
        artist: 'NewJeans',
        lyrics: '',
    },
    {
        name: 'Hype Boy',
        src: 'songs/newjeans/Hype Boy.mp3',
        cover: 'img/first.jpg',
        artist: 'NewJeans',
        lyrics: '',
    },
    {
        name: 'Cookie',
        src: 'songs/newjeans/Cookie.mp3',
        cover: 'img/first.jpg',
        artist: 'NewJeans',
        lyrics: '',
    },
    {
        name: 'Hurt',
        src: 'songs/newjeans/Hurt.mp3',
        cover: 'img/first.jpg',
        artist: 'NewJeans',
        lyrics: '',
    },
    {
        name: 'Ditto',
        src: 'songs/newjeans/Ditto.mp3',
        cover: 'img/ditto.jpg',
        artist: 'NewJeans',
        lyrics: '',
    },
    {
        name: 'OMG',
        src: 'songs/newjeans/OMG.mp3',
        cover: 'img/omg.jpg',
        artist: 'NewJeans',
        lyrics: '',
    },
    {
        name: 'Zero',
        src: 'songs/newjeans/Zero.mp3',
        cover: 'img/zero.jpg',
        artist: 'NewJeans',
        lyrics: '',
    },
    {
        name: 'NewJeans',
        src: 'songs/newjeans/NewJeans.mp3',
        cover: 'img/second.jpg',
        artist: 'NewJeans',
        lyrics: '',
    },
    {
        name: 'Super Shy',
        src: 'songs/newjeans/Super Shy.mp3',
        cover: 'img/second.jpg',
        artist: 'NewJeans',
        lyrics: '',
    },
    {
        name: 'ETA',
        src: 'songs/newjeans/ETA.mp3',
        cover: 'img/second.jpg',
        artist: 'NewJeans',
        lyrics: '',
    },
    {
        name: 'Cool With You',
        src: 'songs/newjeans/NewJeans.mp3',
        cover: 'img/second.jpg',
        artist: 'NewJeans',
        lyrics: '',
    },
    {
        name: 'ASAP',
        src: 'songs/newjeans/ASAP.mp3',
        cover: 'img/second.jpg',
        artist: 'NewJeans',
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

let albums = [
    {
        name: 'Attention',
        picture: 'img/first.jpg',
    },
]