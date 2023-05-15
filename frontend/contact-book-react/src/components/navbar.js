import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary menu-container'>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  New Contact
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/contacts'>
                  Contact List
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
