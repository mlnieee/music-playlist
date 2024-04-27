let songs = [
    {
        name: 'True Intention',
        src: 'songs/jpop/takayan/True Intention.mp3',
        cover: 'img/jpop/true intention.jpg',
        artist: 'takayan',
        lyrics: '',
    },
    {
        name: 'メンヘラって神じゃね？',
        src: 'songs/jpop/takayan/メンヘラって神じゃね？.mp3',
        cover: 'img/jpop/isnt menhera a god.jpeg',
        artist: 'takayan',
        lyrics: '',
    },
    {
        name: 'らぶびーむ!!_ たかやん',
        src: 'songs/jpop/takayan/らぶびーむ!!_ たかやん.mp3',
        cover: 'img/jpop/love beam.jpeg',
        artist: 'takayan',
        lyrics: '',
    },
]

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