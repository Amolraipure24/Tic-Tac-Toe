import React, { useState } from "react";
import Cell from "./Cell";

const Board = () => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (cells[index] || checkWinner(cells)) return;

        const nextCells = [...cells];
        nextCells[index] = isXNext ? "X" : "O";
        setCells(nextCells);
        setIsXNext(!isXNext);
    };

    const checkWinner = (cells) => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const [a, b, c] of winningCombos) {
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                return cells[a];
            }
        }
        return null;
    };

    const winner = checkWinner(cells);

    const resetGame = () => {
        setCells(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 mb-6">
                {cells.map((cell, index) => (
                    <Cell
                        key={index}
                        value={cell}
                        onClick={() => handleClick(index)}
                        isWinningCell={
                            winner && checkWinner(cells)?.includes(index)
                        }
                    />
                ))}
            </div>
            {winner && (
                <div className="text-center text-xl font-semibold text-green-400 animate-pulse">
                    🎉 Winner: {winner} 🎉
                </div>
            )}
            {!winner && cells.every((cell) => cell) && (
                <div className="text-center text-xl font-semibold text-yellow-400 animate-bounce">
                    🤝 It's a Draw! 🤝
                </div>
            )}
            <button
                onClick={resetGame}
                className="w-full py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
            >
                Restart Game
            </button>
        </div>
    );
};

export default Board;
