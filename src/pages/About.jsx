import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

export default function About(){
    return(
        <div className="flex justify-center items-center relative mb-8 rounded-2xl p-3 border-2 border-[#ffcc7f] bg-[#ffcc7f] m-5">
            <h1 className="text-3xl font-bold">Назва нашого проекту "Улюблені лапки".  Наша команда працює над  створеням сайту, у якому ви злегкістю знайдете pet-friendly місця. Наш сайт – ваш найкращий помічник у пошуку ідеальних місць для прогулянок і відпочинку з вашими улюбленцями. За допомогою нашої платформи ви зможете знайти найближчі парки, кафе, готелі та інші заклади, які ласкаво вітають дружніх тварин.</h1>
        </div>  
    )
}
