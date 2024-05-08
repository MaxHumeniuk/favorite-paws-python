import Header from "../components/Header"
import 'tailwindcss/tailwind.css';
import React from 'react';
import 'tailwindcss/tailwind.css';


export default function Mainmenu(){
    return(
        <div>
            <Header />
            <h1 className="bg-indigo-400 m-2 inline-block align-40 text-xl">Ви знаходитесь у головному меню, Ви можете переключатись між сторінками за допомогою меню</h1>
        </div>
    )

}