let songs=[
    {
        name: 'Comfort Crowd',
        src: 'songs/pop/conan gray/Comfort Crowd.mp3',
        cover: 'img/img/pop/comfort crowd.jpeg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Wish You Were Sober',
        src: 'songs/pop/conan gray/Wish You Were Sober.mp3',
        cover: 'img/img/pop/comfort crowd.jpeg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Maniac',
        src: 'songs/pop/conan gray/Wish You Were Sober.mp3',
        cover: 'songs/pop/conan gray/Maniac.mp3',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Fight or Flight',
        src: 'songs/pop/conan gray/Fight or Flight.mp3',
        cover: 'img/img/pop/comfort crowd.jpeg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Heather',
        src: 'songs/pop/conan gray/Heather.mp3',
        cover: 'img/img/pop/comfort crowd.jpeg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'The Story',
        src: 'songs/pop/conan gray/The Story.mp3',
        cover: 'img/img/pop/comfort crowd.jpeg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Fake',
        src: 'songs/pop/conan gray/Fake.mp3',
        cover: 'img/img/pop/fake.jpg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Astronomy',
        src: 'songs/pop/conan gray/Astronomy.mp3',
        cover: 'img/pop/astronomy.jpg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Movies',
        src: 'songs/pop/conan gray/Movies.mp3',
        cover: 'img/pop/movies.jpg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Best Friend',
        src: 'songs/pop/conan gray/Best Friend.mp3',
        cover: 'img/pop/movies.jpg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Yours',
        src: 'songs/pop/conan gray/Yours.mp3',
        cover: 'img/pop/movies.jpg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Memories',
        src: 'songs/pop/conan gray/Memories.mp3',
        cover: 'img/pop/movies.jpg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Killing Me',
        src: 'songs/pop/conan gray/Killing Me.mp3',
        cover: 'img/pop/killing me.jpg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Found Heaven',
        src: 'songs/pop/conan gray/Found Heaven.mp3',
        cover: 'img/pop/found heaven.jpg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Fainted Love',
        src: 'songs/pop/conan gray/Fainted Love.mp3',
        cover: 'img/pop/found heaven.jpg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Lonely Dancers',
        src: 'songs/pop/conan gray/Lonely Dancers.mp3',
        cover: 'img/pop/found heaven.jpg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Alley Rose',
        src: 'songs/pop/conan gray/Alley Rose.mp3',
        cover: 'img/pop/found heaven.jpg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'The Final Fight',
        src: 'songs/pop/conan gray/The Final Fight.mp3',
        cover: 'img/pop/found heaven.jpg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Eye Of The Night',
        src: 'songs/pop/conan gray/Eye Of The Night.mp3',
        cover: 'img/pop/found heaven.jpg',
        artist: 'Conan Gray',
        lyrics: '',
    },
    {
        name: 'Winner',
        src: 'songs/pop/conan gray/Winner.mp3',
        cover: 'img/pop/found heaven.jpg',
        artist: 'Conan Gray',
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