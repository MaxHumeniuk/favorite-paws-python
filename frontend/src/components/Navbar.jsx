import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import fav_paw from '../assets/preview.png';
import monobank from '../assets/monobank.png';
import homeIcon from '../assets/home-icon.png';
import homeIconHover from '../assets/home-icon-hover.png';
import locationIcon from '../assets/location-icon.png';
import locationIconHover from '../assets/location-icon-hover.png';
import contactIcon from '../assets/contact-icon.png';
import contactIconHover from '../assets/contact-icon-hover.png';
import aboutIcon from '../assets/about-icon.png';
import aboutIconHover from '../assets/about-icon-hover.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredLocations, setIsHoveredLocations] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  

  return (
    <nav className='flex justify-between items-center h-24 max-w-[auto] text-[#000000]'>
      <div className='ml-4'>
        <img className='w-[180px] mt-2' src={fav_paw} alt='/' />
      </div>
      <div onClick={handleNav} className='text-[#745638] m-5 block md:show'>
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
        </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[35%] h-full border-[#fdfeff] bg-[#ffcf9f] ease-in-out duration-300 z-50' : 'ease-in-out duration-300 fixed left-[-100%] z-50'}>
        <h1 className='p-5 flex justify-center w-full text-3xl font-bold text-[#806141] m-4' style={{ fontSize: "3rem" }}>Улюблені лапки</h1>
        <Link 
          to="/" 
          className="rounded-r-lg p-5 flex justify-center items-center border-gray-600 text-[#806141] font-bold block  hover:bg-[#d4a373] delay-100 duration-100 transform hover:scale-105 transition ease-linear hover:shadow-2xl" 
          style={{ fontSize: "3rem" }}
          onMouseEnter={() => setIsHoveredHome(true)}
          onMouseLeave={() => setIsHoveredHome(false)}
        >
          {isHoveredHome ? (
            <img src={homeIconHover} alt="Home Icon" className="w-14 h-14 ml-4 mt-3" />
          ) : (
            <div className="flex items-center">
              <img src={homeIcon} alt="Home Icon" className="w-10 h-10 ml-2 mt-3" />
              <span className="ml-2">Home</span>
            </div>
          )}
        </Link>
        <Link 
          to="/locations" 
          className="rounded-r-lg p-5 flex justify-center items-center border-gray-600 text-[#806141] font-bold block  hover:bg-[#d4a373] delay-100 duration-100 transform hover:scale-105 transition ease-linear hover:shadow-2xl" 
          style={{ fontSize: "3rem" }}
          onMouseEnter={() => setIsHoveredLocations(true)}
          onMouseLeave={() => setIsHoveredLocations(false)}
        >
          {isHoveredLocations ? (
            <img src={locationIconHover} alt="Location Icon" className="w-14 h-14 ml-4 mt-3" />
          ) : (
            <div className="flex items-center">
              <img src={locationIcon} alt="Location Icon" className="w-10 h-10 ml-2 mt-3" />
              <span className="ml-2">Locations</span>
            </div>
          )}
        </Link>
        <Link 
          to="/about" 
          className="rounded-r-lg p-5 flex justify-center items-center border-gray-600 text-[#806141] font-bold block  hover:bg-[#d4a373] delay-100 duration-100 transform hover:scale-105 transition ease-linear hover:shadow-2xl" 
          style={{ fontSize: "3rem" }}
          onMouseEnter={() => setIsHoveredAbout(true)}
          onMouseLeave={() => setIsHoveredAbout(false)}
        >
          {isHoveredAbout ? (
            <img src={aboutIconHover} alt="About Icon" className="w-14 h-14 ml-4 mt-3" />
          ) : (
            <div className="flex items-center">
              <img src={aboutIcon} alt="About Icon" className="w-10 h-10 ml-2 mt-3" />
              <span className="ml-2">About</span>
            </div>
          )}
        </Link>
        <Link 
          to="/contact" 
          className="rounded-r-lg p-5 flex justify-center items-center border-gray-600 text-[#806141] font-bold block  hover:bg-[#d4a373] delay-100 duration-100 transform hover:scale-105 transition ease-linear hover:shadow-2xl" 
          style={{ fontSize: "3rem" }}
          onMouseEnter={() => setIsHoveredContact(true)}
          onMouseLeave={() => setIsHoveredContact(false)}
        >
          {isHoveredContact ? (
            <img src={contactIconHover} alt="Contact Icon" className="w-14 h-14 ml-4 mt-3" />
          ) : (
            <div className="flex items-center">
              <img src={contactIcon} alt="Contact Icon" className="w-10 h-10 ml-2 mt-3" />
              <span className="ml-2">Contact</span>
            </div>
          )}
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;