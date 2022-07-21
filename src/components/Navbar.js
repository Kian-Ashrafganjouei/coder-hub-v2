import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Frencgstyle.css'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='./pages/Home.js' className='navbar-logo' onClick={closeMobileMenu}>
            Coder Hub
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='./pages/Langauges.js' className='nav-links' onClick={closeMobileMenu}>
                Langauges
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='./pages/Videos.js'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Videos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='./pages/Charts.js'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Charts
              </Link>
            </li>
            
            <li className='nav-item'>
              <a
                href='https://kian-ashrafganjouei.github.io/coder-hub-v2-fr/'
                className='nav-links '
                onClick={closeMobileMenu}
              >
                French
              </a>
            </li>
          
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
