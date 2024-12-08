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
        <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
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
                <div className="text-center text-2xl font-semibold text-green-500 animate-pulse">
                    🎉 Winner: {winner} 🎉
                </div>
            )}
            {!winner && cells.every((cell) => cell) && (
                <div className="text-center text-2xl font-semibold text-yellow-500 animate-bounce">
                    🤝 It's a Draw! 🤝
                </div>
            )}
            <button
                onClick={resetGame}
                className="mt-4 w-full py-2 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
                Restart Game
            </button>
        </div>
    );
};

export default Board;
