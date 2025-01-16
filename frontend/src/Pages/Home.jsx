import React from "react";
import Board from "../components/Board";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-md w-full">
                <h1 className="text-center text-4xl font-bold text-white mb-6">
                    ✨{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                        Tic-Tac-Toe Amol l;fkjsdlf
                    </span>{" "}
                    ✨
                </h1>
                <Board />
            </div>
        </div>
    );
};

export default Home;
