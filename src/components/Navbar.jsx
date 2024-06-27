import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from "react"
import { Link, useLocation } from 'react-router-dom';

import { navLinksTop, navLinksBottom } from "../constants/navbar"
import { ucrlogo } from "../assets";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const location = useLocation();
  const navLinks = navLinksTop.concat(navLinksBottom)


  return (
    <header className="fixed grid place-items-center w-full h-[60px] z-10">
      
      {/* Main Navbar */}
      <nav className="flex items-center justify-between w-[90%] lg:w-[1024px] h-full rounded-b-std bg-white drop-shadow-4xl">
          <div className="flex flex-row items-center text-md lg:text-xl font-bold px-5">
            <span className=''>Barsukov Group @ </span>
            <div className="px-2 mt-[9px]">
              <img 
                src={ucrlogo}
                className='w-[70px] lg:w-[100px]'
              />
            </div>
          </div>

          <div className="list-none pr-10 max-lg:hidden">

            <div className="flex flex-row">
            {navLinksTop.map((link, index)=>{
              const isActive = (location.pathname === link.href)
              return (
                <li 
                  key={index}
                  className={`
                    ${index == 3 ? '' : 'w-[100px]' }
                    ${isActive ? 'text-blue-500' : ''}`
                  }
                >
                  <Link to={link.href}>
                    {link.id}
                  </Link>
                </li>
              )
            })}
            </div>
            <div className="w-full h-1 col-span-4 bg-black"></div>
            <div className="flex flex-row">
            {navLinksBottom.map((link, index)=>{
              const isActive = (location.pathname === link.href)
              return (
                <li 
                  key={index}
                  className={`
                    ${index == 3 ? '' : 'w-[100px]' }
                    ${isActive ? 'text-blue-500' : ''}`
                  }
                >
                  <Link to={link.href}>
                    {link.id}
                  </Link>
                </li>
              )
              })}
            </div>


          </div>

          <button className='mr-5 text-xl lg:hidden'
              onClick={handleNav}
              aria-label="Toggle navigation">
            {!nav ? <AiOutlineMenu/> : <AiOutlineClose/>}
          </button>
      </nav>



      {/* Mobile Navbar */}
      <div className={!nav ? 'hidden' :'fixed lg:hidden'}>
        <div>
          {navLinks.map((link, index) => (
            <ul key={index}>
              <Link
                href={link.href}
                onClick={handleNav}>
                {link.id}
              </Link>
            </ul>
          ))}
        </div>
      </div>


    </header>
  )
}

export default Navbar