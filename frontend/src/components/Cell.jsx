import React from "react";

const Cell = ({ value, onClick, isWinningCell }) => {
    return (
        <button
            className={`w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-4xl font-bold rounded-lg shadow-lg transition-transform duration-200 ${
                isWinningCell
                    ? "bg-green-400 text-white animate-glow"
                    : "bg-white bg-opacity-20 text-white hover:bg-opacity-50"
            }`}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Cell;
