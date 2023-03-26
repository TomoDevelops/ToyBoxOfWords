import { createContext, useEffect, useState } from "react";

const GAME_SCREEN_NAME = [
    "MemoryCardGame",
    "NumberCardGame",
    "ShapeCardGame",
    "AlphabetCardGame",
    "VehicleGame",
];

export const PagesContext = createContext({
    pages: "",
    shuffleGamePages: () => {},
    shufflePage: () => {},
});

const PagesContextProvider = ({ children }) => {
    const [shuffledGamePages, setShuffledGamePages] = useState([]);
    const [currentPage, setCurrentPage] = useState("");
    const [currentPageCount, setCurrentPageCount] = useState(0);

    const shuffleGamePages = () => {
        setShuffledGamePages(
            GAME_SCREEN_NAME.sort((a, b) => 0.5 - Math.random())
        );
    };

    useEffect(() => {
        setCurrentPage(shuffledGamePages[0]);
    }, [shuffledGamePages]);

    const shufflePage = () => {
        setCurrentPage(shuffledGamePages[currentPageCount]);
        if (currentPageCount < GAME_SCREEN_NAME.length - 1) {
            setCurrentPageCount((cnt) => cnt + 1);
        } else {
            setCurrentPageCount(0);
        }
    };

    const value = {
        pages: currentPage,
        shuffleGamePages: shuffleGamePages,
        shufflePage: shufflePage,
    };

    return (
        <PagesContext.Provider value={value}>{children}</PagesContext.Provider>
    );
};

export default PagesContextProvider;
