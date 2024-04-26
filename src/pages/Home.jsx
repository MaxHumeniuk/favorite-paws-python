import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import background from '../assets/фон.jpg'; // Замініть цей шлях на правильний шлях до вашого фонового зображення

export default function Home(){
    return(
        <div className="flex justify-end items-center min-h-screen bg-cover" style={{ backgroundImage: `url(${background})` }}>
            <div className="flex flex-col justify-center items-end p-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-right mb-6 max-w-lg">Якщо ваш домашній улюбленець хоче їсти</h1>
                <Link to="/locations" className="block text-center bg-[#d4a373] text-black font-bold rounded-full py-2 px-4 my-4 hover:bg-[#d4a373] hover:text-black hover:border-black active:bg-[#b18458] active:text-black active:border-black delay-100 duration-100 transform hover:scale-110 transition ease-linear animate-bounce hover:bg-[#c99461]">
                    Перегляньте пет-френдлі заклади у Львові
                </Link>
            </div>
        </div>
    )
}