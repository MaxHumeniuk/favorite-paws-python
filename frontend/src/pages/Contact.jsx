import React from 'react';
import 'tailwindcss/tailwind.css';
import Hum from '../assets/Максим.jpg';
import Ivan from '../assets/Макс.jpg';
import Teg from '../assets/Соля.jpg';
import Nov from '../assets/Настя.jpg';
import Zam from '../assets/Наталя.jpg';

const contacts = [
  {
    name: "Івановський Максим",
    email: "Max7ioy7@gmail.com",
    image: Ivan
  },
  {
    name: "Гуменюк Максим",
    email: "maxhumeniuk321@gmail.com",
    image: Hum
  },
  {
    name: "Анастасія Новосад",
    email: "nast127ia@gmail.com",
    image: Nov
  },
  {
    name: "Теглівець Соломія",
    email: "solomiateglivec7@gmail.com",
    image: Teg
  },
  {
    name: "Замойська Наталія",
    email: "natalizam1315@gmail.com",
    image: Zam
  }
];

export default function ContactList() {
  return (
    <div className="container mx-auto px-4 py-8 bg-[#ffcc7f] rounded m-20 shadow-lg ">
  <h1 className="font-bold text-3xl flex flex-col items-center text-[#b18458]  block rounded mt-2">Ви завжди можете зв'язатись із нами!</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
    {contacts.map((contact, index) => (
      <div key={index} className="flex flex-col items-center p-5">
        <img src={contact.image} alt={contact.name} className="w-45 h-40 mb-4 shadow-lg delay-100 duration-100 transform hover:scale-110 transition ease-linear hover:shadow-2xl" />
        <a href={`mailto:${contact.email}`} className="text-gray-600 mb-2 text-black bg-[#d4a373] rounded-md p-5 shadow-lg delay-100 duration-100 transform hover:scale-105 transition ease-linear hover:shadow-2xl">{contact.email}</a>
      </div>
    ))}
  </div>
</div>

  );
}
