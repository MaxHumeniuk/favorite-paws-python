import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import background from '../assets/фон.jpg'; // Замініть цей шлях на правильний шлях до вашого фонового зображення
import monobank from '../assets/monobank.png';

export default function Home(){
    return(
        <div className=" flex justify-end items-center min-h-screen bg-cover" style={{ backgroundImage: `url(${background})` }}>
            <div className=" flex flex-col justify-center items-end p-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-right mb-6 max-w-lg text-[#765537]">Якщо ваш домашній улюбленець хоче їсти</h1>
                <Link to="/locations" className=" block text-center bg-[#d4a373] text-[#5a422b] font-bold rounded-full py-2 px-4 my-4 hover:bg-[#c99461] hover:text-[#644a30] hover:border-black active:bg-[#b18458] active:text-[#715539] active:border-black delay-100 duration-100 transform hover:scale-110 transition ease-linear animate-bounce  ">
                    Перегляньте пет-френдлі заклади у Львові
                </Link>
                <img src={monobank} alt="Monobank Icon" className="w-[130px] h-[130px] m-5 mb-[-90px]" />
            


            </div>
        </div>
    )
}