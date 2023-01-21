import { createContext, useState } from "react";

import GAME_DATA from "../../data/data";

export const PagesContext = createContext({
    pages: "",
    shufflePage: () => {},
});

const PagesContextProvider = ({ children }) => {
    const GAME_SCREEN_NAME = [
        "memoryCardGame",
        "numberCardGame",
        "shapeCardGame",
    ];

    const [currentPage, setCurrentPage] = useState("memoryCardGame");

    const shufflePage = () => {
        const randomDisplay = Math.floor(
            Math.random() * (GAME_SCREEN_NAME.length - 1)
        );
        setCurrentPage((prevPage) => {
            const currentPageExcluded = GAME_SCREEN_NAME.filter(
                (screen) => screen !== prevPage
            );
            console.log(currentPageExcluded[randomDisplay]);
            return currentPageExcluded[randomDisplay];
        });
    };

    const value = {
        pages: GAME_DATA.game_pages[currentPage],
        shufflePage: shufflePage,
    };

    return (
        <PagesContext.Provider value={value}>{children}</PagesContext.Provider>
    );
};

export default PagesContextProvider;
