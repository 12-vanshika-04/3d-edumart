import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import brain from "../assets/brain.jpg"
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate=useNavigate();
  return (
    <header className="py-1 px-7 flex justify-between items-center sticky top-0 z-50 w-full border-b-[0.3px] border-[#babaff]">
        <div className='flex gap-8'>
      <div className="flex lg:gap-14 gap-4 items-center">
        <Link to="/">
          <img className="md:w-16 w-12" src="public\3DCreation2.png" alt="logo" />
        </Link>
      </div>

      <div className="flex gap-5 justify-left items-center">
        <button className="h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300"
        onClick={()=> navigate("/gallery")}>
          EXPLORE NOW
        </button>
      </div>
      </div>
      <div>

      </div>
    
      <div>
        <nav className="flex lg:gap-8 gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 
               after:content-[''] after:absolute after:h-0.5 after:bg-purple-400 
               after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap 
               ${isActive ? 'text-purple-300' : 'text-white'}`
            }
          >
             <i class='bx  bx-home-alt-2'  ></i> 
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 
               after:content-[''] after:absolute after:h-0.5 after:bg-purple-400 
               after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap 
               ${isActive ? 'text-purple-300' : 'text-white'}`
            }
          >
           <i class='bx  bx-info-square'  ></i> 
            About
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 
               after:content-[''] after:absolute after:h-0.5 after:bg-purple-400 
               after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap 
               ${isActive ? 'text-purple-300' : 'text-white'}`
            }
          >
            <i class='bx  bx-images'  ></i> 
            Gallery
          </NavLink>
          
        </nav>
        
      </div>
    </header>
  );
}

export default Header;
