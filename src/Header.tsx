import { useState, useEffect } from 'react';
import { IoIosClose, IoMdMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdOutlineContactPhone } from "react-icons/md";
import logo from "/src/assets/jcaslogo.png"
import { Link } from 'react-router-dom';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100){
        setIsSticky(true);
      }
      else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  })

  return (
    <div className='w-full fixed bg-brandWhite py-2 top-0 left-0 right-0 z-50'>
        <div className={`flex justify-between items-center w-full py-2 pl-6 pr-9 md:px-8 lg:px-10 xl:px-20 ${isSticky ? "bg-[#ffffff] -mt-2 sticky top-0 right-0 left-0 duration-300": ""}`}>
            <div>
                <img className="size-12 md:size-20" src={logo}/>
            </div>

            <nav className='md:flex items-center roboto-regular'>
                <ul className="hidden md:flex gap-7">
                    <Link to="/" className="text-xl md:text-lg lg:text-2xl text-brandBlack font-semibold hover:text-brandRed hover:-translate-y-2 duration-200">TOP</Link>
                    <li className="text-xl md:text-lg lg:text-2xl text-brandBlack font-semibold hover:text-brandRed hover:-translate-y-2 duration-200"><a href='#about'>ABOUT</a></li>
                    <li className="text-xl md:text-lg lg:text-2xl text-brandBlack font-semibold hover:text-brandRed hover:-translate-y-2 duration-200"><a href='#services'>SERVICES</a></li>
                    <li className="text-xl md:text-lg lg:text-2xl text-brandBlack font-semibold hover:text-brandRed hover:-translate-y-2 duration-200"><a href='#gallery'>GALLERY</a></li>
                    <li className="text-xl md:text-lg lg:text-2xl text-brandBlack font-semibold hover:text-brandRed hover:-translate-y-2 duration-200"><a href='#contact'>CONTACT</a></li>
                </ul>
            </nav>

            <div>
              <Link to="/Book" className='bg-brandGreen text-xl md:text-lg text-brandWhite py-2 px-6 rounded-lg hover:-translate-y-2 duration-200 hidden md:block'>BOOK</Link>
            </div>

            <div className='md:hidden flex items-center'>
              <button className='focus:outline-none focus:text-gray-500'
                onClick={toggleMenu}>
                {
                  isMenuOpen ? (<IoIosClose className='h-6 w-6'/>) : (<IoMdMenu className='h-6 w-6'/>)
                }
              </button>
            </div>

            <div className={`space-y-4 w-full mt-16 py-8 bg-[#ffffff] ${ isMenuOpen ? "block fixed top-0 left-0": "hidden"}`}>
              <nav className="flex flex-col text-center">
                <ul>
                  <li className="text-3xl text-neutralWhite font-semibold py-3"><a href='#'><IoHomeOutline className='inline-block mr-3'/>TOP</a></li>
                    <li className="text-3xl text-neutralWhite font-semibold py-3"><a href='#about'><FaRegUser className='inline-block mr-3'/>ABOUT</a></li>
                    <li className="text-3xl text-neutralWhite font-semibold py-3"><a href='#services'><FaRegUser className='inline-block mr-3'/>SERVICES</a></li>
                    <li className="text-3xl text-neutralWhite font-semibold py-3"><a href='#gallery'><GrProjects className='inline-block mr-3'/>GALLERY</a></li>
                    <li className="text-3xl text-neutralWhite font-semibold py-3"><a href='#contact'><MdOutlineContactPhone className='inline-block mr-3'/>CONTACT</a></li>
                </ul>
              </nav>
            </div>
        </div>
    </div>
  )
}

export default Header