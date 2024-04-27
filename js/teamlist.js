let songs = [
    {
        name: 'Under the skin',
        src: 'songs/jpop/andteam/Under the skin.mp3',
        cover: 'img/jpop/under the skin.jpg',
        artist: "&TEAM",
        lyrics: '',
    },
    {
        name: 'Scent of you',
        src: 'songs/jpop/andteam/Scent of you.mp3',
        cover: 'img/jpop/under the skin.jpg',
        artist: "&TEAM",
        lyrics: '',
    },
    {
        name: 'BUZZ LOVE',
        src: 'songs/jpop/andteam/BUZZ LOVE.mp3',
        cover: 'img/jpop/under the skin.jpg',
        artist: "&TEAM",
        lyrics: '',
    },
    {
        name: "The Final Countdown - &TEAM ver.",
        src: "songs/jpop/andteam/The Final Countdown - andTeam ver.mp3",
        cover: 'img/jpop/under the skin.jpg',
        artist: "&TEAM",
        lyrics: '',
    },
    {
        name: "W.O.L.F.(Win Or Lose Fight",
        src: "songs/jpop/andteam/W.O.L.F.(Win Or Lose FIght.mp3",
        cover: 'img/jpop/wolf.jpg',
        artist: "&TEAM",
        lyrics: '',
    },
    {
        name: 'Blind Love',
        src: 'songs/jpop/andteam/Blind Love.mp3',
        cover: 'img/jpop/blind love.jpeg',
        artist: "&TEAM",
        lyrics: '',
    },
    {
        name: 'FIREWORK',
        src: 'songs/jpop/andteam/FIREWORK.mp3',
        cover: 'img/jpop/firework.jpg',
        artist: "&TEAM",
        lyrics: '',
    },
    {
        name: 'Road Not Taken',
        src: 'songs/jpop/andteam/Road Not Taken.mp3',
        cover: 'img/jpop/firework.jpg',
        artist: "&TEAM",
        lyrics: '',
    },
    {
        name: 'War Cry',
        src: 'songs/jpop/andteam/War Cry.mp3',
        cover: 'img/jpop/war cry.jpeg',
        artist: "&TEAM",
        lyrics: '',
    },
    {
        name: 'Dropkick',
        src: 'songs/jpop/andteam/Dropkick.mp3',
        cover: 'img/jpop/war cry.jpeg',
        artist: "&TEAM",
        lyrics: '',
    },
    {
        name: 'Really Crazy',
        src: 'songs/jpop/andteam/Reallu Crazy.mp3',
        cover: 'img/jpop/war cry.jpeg',
        artist: "&TEAM",
        lyrics: '',
    },
    {
        name: 'ALIEN',
        src: 'songs/jpop/andteam/ALIEN.mp3',
        cover: 'img/jpop/war cry.jpeg',
        artist: "&TEAM",
        lyrics: '',
    },
    {
        name: 'The moon is beautiful',
        src: 'songs/jpop/andteam/The moon is beautiful.mp3',
        cover: 'img/jpop/war cry.jpeg',
        artist: "&TEAM",
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