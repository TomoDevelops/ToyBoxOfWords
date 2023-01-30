import StartScreen from "./StartScreen";
import GameOverScreen from "./GameOverScreen";
import MemoryCardGame from "./MemoryCardGame";
import NumberCardGame from "./NumberCardGame";
import ShapeCardGame from "./ShapeCardGame";
import AlphabetCardGame from "./AlphabetCardGame";

const pageAnimation = {
    animation: "fade",
    presentation: "card",
};

const routes = [
    {
        name: "Start",
        component: StartScreen,
        options: pageAnimation,
    },
    {
        name: "GameOver",
        component: GameOverScreen,
        options: pageAnimation,
    },
    {
        name: "MemoryCardGame",
        component: MemoryCardGame,
        options: pageAnimation,
    },
    {
        name: "NumberCardGame",
        component: NumberCardGame,
        options: pageAnimation,
    },
    { name: "ShapeCardGame", component: ShapeCardGame, options: pageAnimation },
    {
        name: "AlphabetCardGame",
        component: AlphabetCardGame,
        options: pageAnimation,
    },
];

export default routes;
