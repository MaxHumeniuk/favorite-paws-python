import React from 'react';
import 'tailwindcss/tailwind.css';

const contacts = [
  {
    "name": "Івановський Максим",
    "image": "/contact1.jpg",
    "phone": "+380988083435",
    "email": "Max7ioy7@gmail.com"
  },
  {
    "name": "Гуменюк Максим",
    "image": "/assets/Hum.jpg",
    "phone": "+380687195944",
    "email": "maxhumeniuk321@gmail.com"
  },
  {
    "name": "Анастасія Новосад",
    "image": "/contact2.jpg",
    "phone": "+380684534568",
    "email": "nast127ia@gmail.com"
  },
  {
    "name": "Теглівець Соломія",
    "image": "/contact2.jpg",
    "phone": "+380960018677",
    "email": "solomiateglivec7@gmail.com"
  },
  {
    "name": "Замойська Наталія",
    "image": "/contact2.jpg",
    "phone": "+380733278685",
    "email": "natalizam1315@gmail.com"
  }
];

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Контактна інформація</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {contacts.map(contact => (
          <div key={contact.email} className="flex flex-col items-center">
            <img src={contact.image} alt={contact.name} className="w-40 h-40 mb-4" />
            <p className="text-gray-600 mb-2">{contact.phone}</p>
            <p className="text-gray-600 mb-2">{contact.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
