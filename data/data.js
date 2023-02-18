const GAME_DATA = {
    gameResources: {
        welcome: require("../assets/images/system/welcome.png"),
        correct: require("../assets/audio/system/correct.mp3"),
        wrong: require("../assets/audio/system/wrong.mp3"),
        goodJob: require("../assets/audio/system/good-job.mp3"),
        playButton: require("../assets/images/system/play.png"),
        homeButton: require("../assets/images/system/home.json"),
        confetti: require("../assets/images/system/confetti.json"),
    },
    memoryGame: [
        {
            src: require("../assets/images/memoryGame/dog.png"),
            audio: require("../assets/audio/memoryGame/dog.mp3"),
            matched: false,
        },
        {
            src: require("../assets/images/memoryGame/cat.png"),
            audio: require("../assets/audio/memoryGame/cat.mp3"),
            matched: false,
        },
        {
            src: require("../assets/images/memoryGame/bird.png"),
            audio: require("../assets/audio/memoryGame/bird.mp3"),
            matched: false,
        },
        {
            src: require("../assets/images/memoryGame/dinosaur.png"),
            audio: require("../assets/audio/memoryGame/dinosaur.mp3"),
            matched: false,
        },
        {
            src: require("../assets/images/memoryGame/dolphin.png"),
            audio: require("../assets/audio/memoryGame/dolphin.mp3"),
            matched: false,
        },
        {
            src: require("../assets/images/memoryGame/penguin.png"),
            audio: require("../assets/audio/memoryGame/penguin.mp3"),
            matched: false,
        },
    ],
    alphabetGame: [{ alphabet: "A" }],
    // "number-game": [
    //     {
    //         type: "one",
    //         img: require("../assets/img/one.png"),
    //         audio: require("../assets/audio/one.mp3"),
    //     },
    //     {
    //         type: "two",
    //         img: require("../assets/img/two.png"),
    //         audio: require("../assets/audio/two.mp3"),
    //     },
    //     {
    //         type: "three",
    //         img: require("../assets/img/three.png"),
    //         audio: require("../assets/audio/three.mp3"),
    //     },
    //     {
    //         type: "four",
    //         img: require("../assets/img/four.png"),
    //         audio: require("../assets/audio/four.mp3"),
    //     },
    //     {
    //         type: "five",
    //         img: require("../assets/img/five.png"),
    //         audio: require("../assets/audio/five.mp3"),
    //     },
    //     {
    //         type: "six",
    //         img: require("../assets/img/six.png"),
    //         audio: require("../assets/audio/six.mp3"),
    //     },
    //     {
    //         type: "seven",
    //         img: require("../assets/img/seven.png"),
    //         audio: require("../assets/audio/seven.mp3"),
    //     },
    //     {
    //         type: "eight",
    //         img: require("../assets/img/eight.png"),
    //         audio: require("../assets/audio/eight.mp3"),
    //     },
    //     {
    //         type: "nine",
    //         img: require("../assets/img/nine.png"),
    //         audio: require("../assets/audio/nine.mp3"),
    //     },
    //     {
    //         type: "ten",
    //         img: require("../assets/img/ten.png"),
    //         audio: require("../assets/audio/ten.mp3"),
    //     },
    // ],
    // "shape-game": [
    //     {
    //         type: "circle",
    //         img: require("../assets/img/circle.png"),
    //         audio: require("../assets/audio/circle.mp3"),
    //     },
    //     {
    //         type: "triangle",
    //         img: require("../assets/img/triangle.png"),
    //         audio: require("../assets/audio/triangle.mp3"),
    //     },
    //     {
    //         type: "diamond",
    //         img: require("../assets/img/diamond.png"),
    //         audio: require("../assets/audio/diamond.mp3"),
    //     },
    //     {
    //         type: "heart",
    //         img: require("../assets/img/heart.png"),
    //         audio: require("../assets/audio/heart.mp3"),
    //     },
    //     {
    //         type: "star",
    //         img: require("../assets/img/star.png"),
    //         audio: require("../assets/audio/star.mp3"),
    //     },
    //     {
    //         type: "square",
    //         img: require("../assets/img/square.png"),
    //         audio: require("../assets/audio/square.mp3"),
    //     },
    //     {
    //         type: "pentagon",
    //         img: require("../assets/img/pentagon.png"),
    //         audio: require("../assets/audio/pentagon.mp3"),
    //     },
    //     {
    //         type: "hexagon",
    //         img: require("../assets/img/hexagon.png"),
    //         audio: require("../assets/audio/hexagon.mp3"),
    //     },
    // ],
};

export default GAME_DATA;
