import { createContext, useState } from "react";

const GAME_SCREEN_NAME = ["MemoryCardGame", "NumberCardGame", "ShapeCardGame"];

const firstGamePage =
    GAME_SCREEN_NAME[Math.floor(Math.random() * GAME_SCREEN_NAME.length)];

export const PagesContext = createContext({
    pages: "",
    shufflePage: () => {},
});

const PagesContextProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(firstGamePage);

    const shufflePage = () => {
        const randomDisplay = Math.floor(
            Math.random() * (GAME_SCREEN_NAME.length - 1)
        );
        setCurrentPage((prevPage) => {
            const currentPageExcluded = GAME_SCREEN_NAME.filter(
                (screen) => screen !== prevPage
            );
            return currentPageExcluded[randomDisplay];
        });
    };

    const value = {
        pages: currentPage,
        shufflePage: shufflePage,
    };

    return (
        <PagesContext.Provider value={value}>{children}</PagesContext.Provider>
    );
};

export default PagesContextProvider;
