import { navLinks } from "../constants/navbar"
import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { ucrlogo } from "../assets";

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);


  return (
    <header className="fixed grid place-items-center w-full h-[60px] z-10">
      
      {/* Main Navbar */}
      <nav className="flex items-center justify-between w-[80%] lg:w-[1024px] h-full rounded-b-std bg-white drop-shadow-4xl">
          <div className="flex flex-row items-center text-xl font-bold px-5">
            <span>Barsukov Group @ </span>
            <div className="px-2 mt-[9px]">
              <img src={ucrlogo}
                  width={100}/>
            </div>
          </div>

          <ul className="grid grid-cols-4 max-lg:hidden pr-5">
            {navLinks.map((link, index)=>(
              <li key={index} 
                  className={`border-black pr-2 ${index >= 4 ? 'border-t-2' : ''}`}>
                <a href={link.href}
                   lassName="px-5 hover:scale-110">
                  {link.id}
                </a>
              </li>
            ))}
          </ul>

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
              <a
                href={link.href}
                onClick={handleNav}>
                {link.id}
              </a>
            </ul>
          ))}
        </div>
      </div>


    </header>
  )
}

export default Navbar