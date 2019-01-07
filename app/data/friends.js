// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.
var friends = [
    {
        "name": "Bob",
        "photo": "https://upload.wikimedia.org/wikipedia/en/7/70/Bob_at_Easel.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Alf",
        "photo": "https://vignette.wikia.nocookie.net/alf/images/6/62/ALF.jpg",
        "scores": [
            5,
            4,
            1,
            5,
            1,
            1,
            5,
            5,
            5,
            3
        ]
    },
    {
        "name": "Fabio",
        "photo": "https://thenypost.files.wordpress.com/2014/01/fabio.jpg",
        "scores": [
            1,
            5,
            5,
            5,
            3,
            1,
            5,
            5,
            5,
            3
        ]
    },
    {
        "name": "Johnny 5",
        "photo": "https://i.kinja-img.com/gawker-media/image/upload/t_original/jvybdug3gptiaxqz8mvt.jpg",
        "scores": [
            1,
            5,
            1,
            1,
            5,
            1,
            3,
            3,
            1,
            5
        ]
    },
    {
        "name": "Minnie ",
        "photo": "https://i.pinimg.com/originals/b4/23/39/b42339f927a58ad53c8698515d8652ae.jpg",
        "scores": [
            1,
            4,
            3,
            1,
            5,
            1,
            5,
            1,
            1,
            5
        ]
    },
    {
        "name": "Baby Doe",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Baby_Doe_Tabor.jpg/250px-Baby_Doe_Tabor.jpg",
        "scores": [
            5,
            5,
            5,
            5,
            4,
            3,
            1,
            5,
            1,
            5
        ]
    },
    {
        "name": "Grace",
        "photo": "data:image/jpeg;base64,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",
        "scores": [
            1,
            5,
            4,
            3,
            1,
            5,
            1,
            1,
            1,
            1
        ]
    }
];

module.exports = friends;
