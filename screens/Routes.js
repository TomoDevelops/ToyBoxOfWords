import StartScreen from "./StartScreen";
import GameOverScreen from "./GameOverScreen";
import MemoryCardGame from "./MemoryCardGame";
import NumberCardGame from "./NumberCardGame";
import ShapeCardGame from "./ShapeCardGame";
import AlphabetCardGame from "./AlphabetCardGame";
import SettingsScreen from "./SettingsScreen";

const pageOptions = {
    headerShown: false,
    animation: "fade",
    presentation: "card",
};

const routes = [
    {
        name: "Start",
        component: StartScreen,
        options: pageOptions,
    },
    {
        name: "GameOver",
        component: GameOverScreen,
        options: pageOptions,
    },
    {
        name: "MemoryCardGame",
        component: MemoryCardGame,
        options: pageOptions,
    },
    {
        name: "NumberCardGame",
        component: NumberCardGame,
        options: pageOptions,
    },
    { name: "ShapeCardGame", component: ShapeCardGame, options: pageOptions },
    {
        name: "AlphabetCardGame",
        component: AlphabetCardGame,
        options: {
            headerShown: false,
            animation: "fade",
            presentation: "card",
        },
    },
    {
        name: "設定",
        component: SettingsScreen,
        options: { presentation: "card" },
    },
];

export default routes;
