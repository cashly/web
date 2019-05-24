import React from 'react';
import './Navbar.scss';

export const Navbar: React.FC = () => {
  return (
      <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item'>
            Cashly
          </a>
          <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false'>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
      </nav>
  );
};
