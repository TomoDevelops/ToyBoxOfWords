import AlphabetCardGame from "./AlphabetCardGame";
import DrawingGame from "./DrawingGame";
import GameOverScreen from "./GameOverScreen";
import MemoryCardGame from "./MemoryCardGame";
import NumberCardGame from "./NumberCardGame";
import SettingsScreen from "./SettingsScreen";
import ShapeCardGame from "./ShapeCardGame";
import StartScreen from "./StartScreen";
import VehicleGame from "./VehicleGame";

const pageOptions = {
    headerShown: false,
    animation: "fade",
    presentation: "card",
    unmountOnBlur: true,
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
        options: pageOptions,
    },
    {
        name: "VehicleGame",
        component: VehicleGame,
        options: pageOptions,
    },
    {
        name: "DrawingGame",
        component: DrawingGame,
        options: pageOptions,
    },
    {
        name: "設定",
        component: SettingsScreen,
        options: { presentation: "card" },
    },
];

export default routes;
