const GAME_DATA = {
    gameResources: {
        welcome: require("../assets/images/system/welcome.png"),
        correct: require("../assets/audio/system/correct.mp3"),
        wrong: require("../assets/audio/system/wrong.mp3"),
        goodJob: require("../assets/audio/system/good-job.mp3"),
        congrats: require("../assets/images/system/goodjob.gif"),
        playButton: require("../assets/images/system/play.png"),
        robot: require("../assets/images/system/robot.json"),
        star: require("../assets/images/system/star.json"),
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
    alphabetGame: [
        {
            id: 1,
            alphabet: "A",
            image: [
                require("../assets/images/alphabetGame/airplane.png"),
                require("../assets/images/alphabetGame/apple.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/airplane.mp3"),
                require("../assets/audio/alphabetGame/apple.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/a.mp3"),
        },
        {
            id: 2,
            alphabet: "B",
            image: [
                require("../assets/images/alphabetGame/bicycle.png"),
                require("../assets/images/alphabetGame/butterfly.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/bicycle.mp3"),
                require("../assets/audio/alphabetGame/butterfly.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/b.mp3"),
        },
        {
            id: 3,
            alphabet: "C",
            image: [
                require("../assets/images/alphabetGame/car.png"),
                require("../assets/images/alphabetGame/cow.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/car.mp3"),
                require("../assets/audio/alphabetGame/cow.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/c.mp3"),
        },
        {
            id: 4,
            alphabet: "D",
            image: [
                require("../assets/images/alphabetGame/dog.png"),
                require("../assets/images/alphabetGame/duck.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/dog.mp3"),
                require("../assets/audio/alphabetGame/duck.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/d.mp3"),
        },
        {
            id: 5,
            alphabet: "E",
            image: [
                require("../assets/images/alphabetGame/egg.png"),
                require("../assets/images/alphabetGame/elephant.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/egg.mp3"),
                require("../assets/audio/alphabetGame/elephant.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/e.mp3"),
        },
        {
            id: 6,
            alphabet: "F",
            image: [
                require("../assets/images/alphabetGame/fish.png"),
                require("../assets/images/alphabetGame/flower.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/fish.mp3"),
                require("../assets/audio/alphabetGame/flower.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/f.mp3"),
        },
        {
            id: 7,
            alphabet: "G",
            image: [
                require("../assets/images/alphabetGame/giraffe.png"),
                require("../assets/images/alphabetGame/glove.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/giraffe.mp3"),
                require("../assets/audio/alphabetGame/glove.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/g.mp3"),
        },
        {
            id: 8,
            alphabet: "H",
            image: [
                require("../assets/images/alphabetGame/horse.png"),
                require("../assets/images/alphabetGame/house.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/horse.mp3"),
                require("../assets/audio/alphabetGame/house.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/h.mp3"),
        },
        {
            id: 9,
            alphabet: "I",
            image: [
                require("../assets/images/alphabetGame/ice.png"),
                require("../assets/images/alphabetGame/icecream.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/ice.mp3"),
                require("../assets/audio/alphabetGame/icecream.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/i.mp3"),
        },
        {
            id: 10,
            alphabet: "J",
            image: [
                require("../assets/images/alphabetGame/jelly.png"),
                require("../assets/images/alphabetGame/jumprope.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/jelly.mp3"),
                require("../assets/audio/alphabetGame/jumprope.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/j.mp3"),
        },
        {
            id: 11,
            alphabet: "K",
            image: [
                require("../assets/images/alphabetGame/koala.png"),
                require("../assets/images/alphabetGame/ketchup.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/koala.mp3"),
                require("../assets/audio/alphabetGame/ketchup.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/k.mp3"),
        },
        {
            id: 12,
            alphabet: "L",
            image: [
                require("../assets/images/alphabetGame/lemon.png"),
                require("../assets/images/alphabetGame/lion.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/lemon.mp3"),
                require("../assets/audio/alphabetGame/lion.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/l.mp3"),
        },
        {
            id: 13,
            alphabet: "M",
            image: [
                require("../assets/images/alphabetGame/monkey.png"),
                require("../assets/images/alphabetGame/mouth.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/monkey.mp3"),
                require("../assets/audio/alphabetGame/mouth.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/m.mp3"),
        },
        {
            id: 14,
            alphabet: "N",
            image: [
                require("../assets/images/alphabetGame/nose.png"),
                require("../assets/images/alphabetGame/nut.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/nose.mp3"),
                require("../assets/audio/alphabetGame/nut.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/n.mp3"),
        },
        {
            id: 15,
            alphabet: "O",
            image: [
                require("../assets/images/alphabetGame/octopus.png"),
                require("../assets/images/alphabetGame/orange.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/octopus.mp3"),
                require("../assets/audio/alphabetGame/orange.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/o.mp3"),
        },
        {
            id: 16,
            alphabet: "P",
            image: [
                require("../assets/images/alphabetGame/pig.png"),
                require("../assets/images/alphabetGame/pineapple.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/pig.mp3"),
                require("../assets/audio/alphabetGame/pineapple.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/p.mp3"),
        },
        {
            id: 17,
            alphabet: "Q",
            image: [require("../assets/images/alphabetGame/queen.png")],
            audio: [require("../assets/audio/alphabetGame/queen.mp3")],
            alphabetAudio: require("../assets/audio/alphabetGame/q.mp3"),
        },
        {
            id: 18,
            alphabet: "R",
            image: [
                require("../assets/images/alphabetGame/rainbow.png"),
                require("../assets/images/alphabetGame/robot.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/rainbow.mp3"),
                require("../assets/audio/alphabetGame/robot.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/r.mp3"),
        },
        {
            id: 19,
            alphabet: "S",
            image: [
                require("../assets/images/alphabetGame/snake.png"),
                require("../assets/images/alphabetGame/sun.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/snake.mp3"),
                require("../assets/audio/alphabetGame/sun.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/s.mp3"),
        },
        {
            id: 20,
            alphabet: "T",
            image: [
                require("../assets/images/alphabetGame/tiger.png"),
                require("../assets/images/alphabetGame/train.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/tiger.mp3"),
                require("../assets/audio/alphabetGame/train.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/t.mp3"),
        },
        {
            id: 21,
            alphabet: "U",
            image: [
                require("../assets/images/alphabetGame/umbrella.png"),
                require("../assets/images/alphabetGame/unicorn.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/umbrella.mp3"),
                require("../assets/audio/alphabetGame/unicorn.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/u.mp3"),
        },
        {
            id: 22,
            alphabet: "V",
            image: [
                require("../assets/images/alphabetGame/vegetable.png"),
                require("../assets/images/alphabetGame/violin.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/vegetable.mp3"),
                require("../assets/audio/alphabetGame/violin.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/v.mp3"),
        },
        {
            id: 23,
            alphabet: "W",
            image: [
                require("../assets/images/alphabetGame/water.png"),
                require("../assets/images/alphabetGame/whale.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/water.mp3"),
                require("../assets/audio/alphabetGame/whale.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/w.mp3"),
        },
        {
            id: 24,
            alphabet: "X",
            image: [require("../assets/images/alphabetGame/x-ray.png")],
            audio: [require("../assets/audio/alphabetGame/x-ray.mp3")],
            alphabetAudio: require("../assets/audio/alphabetGame/x.mp3"),
        },
        {
            id: 25,
            alphabet: "Y",
            image: [
                require("../assets/images/alphabetGame/yacht.png"),
                require("../assets/images/alphabetGame/yarn.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/yacht.mp3"),
                require("../assets/audio/alphabetGame/yarn.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/y.mp3"),
        },
        {
            id: 26,
            alphabet: "Z",
            image: [
                require("../assets/images/alphabetGame/zebra.png"),
                require("../assets/images/alphabetGame/zoo.png"),
            ],
            audio: [
                require("../assets/audio/alphabetGame/zebra.mp3"),
                require("../assets/audio/alphabetGame/zoo.mp3"),
            ],
            alphabetAudio: require("../assets/audio/alphabetGame/z.mp3"),
        },
    ],
    vehicleGame: [
        {
            id: "airplane",
            image: require("../assets/images/vehicleGame/airplane.png"),
            audio: require("../assets/audio/vehicleGame/airplane.mp3"),
            size: "w-32 h-14",
        },
        {
            id: "ambulance",
            image: require("../assets/images/vehicleGame/ambulance.png"),
            audio: require("../assets/audio/vehicleGame/ambulance.mp3"),
            size: "w-36 h-20",
        },
        {
            id: "bicycle",
            image: require("../assets/images/vehicleGame/bicycle.png"),
            audio: require("../assets/audio/vehicleGame/bicycle.mp3"),
            size: "w-32 h-24",
        },
        {
            id: "bus",
            image: require("../assets/images/vehicleGame/bus.png"),
            audio: require("../assets/audio/vehicleGame/bus.mp3"),
            size: "w-48 h-16",
        },
        {
            id: "car",
            image: require("../assets/images/vehicleGame/car.png"),
            audio: require("../assets/audio/vehicleGame/car.mp3"),
            size: "w-40 h-20",
        },
        {
            id: "excavator",
            image: require("../assets/images/vehicleGame/excavator.png"),
            audio: require("../assets/audio/vehicleGame/excavator.mp3"),
            size: "w-40 h-32",
        },
        {
            id: "firetruck",
            image: require("../assets/images/vehicleGame/firetruck.png"),
            audio: require("../assets/audio/vehicleGame/firetruck.mp3"),
            size: "w-56 h-24",
        },
        {
            id: "garbagetruck",
            image: require("../assets/images/vehicleGame/garbagetruck.png"),
            audio: require("../assets/audio/vehicleGame/garbagetruck.mp3"),
            size: "w-48 h-24",
        },
        {
            id: "motorcycle",
            image: require("../assets/images/vehicleGame/motorcycle.png"),
            audio: require("../assets/audio/vehicleGame/motorcycle.mp3"),
            size: "w-[130px] h-28",
        },
        {
            id: "policecar",
            image: require("../assets/images/vehicleGame/policecar.png"),
            audio: require("../assets/audio/vehicleGame/policecar.mp3"),
            size: "w-56 h-20",
        },
        {
            id: "shinkansen",
            image: require("../assets/images/vehicleGame/shinkansen.png"),
            audio: require("../assets/audio/vehicleGame/shinkansen.mp3"),
            size: "w-full h-14",
        },
        {
            id: "truck",
            image: require("../assets/images/vehicleGame/truck.png"),
            audio: require("../assets/audio/vehicleGame/truck.mp3"),
            size: "w-[250px] h-20",
        },
    ],
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
