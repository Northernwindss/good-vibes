import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact-us'>Contact Us</Link>
    <Link to='/forums'>Forums</Link>

  </nav>
)

export default Nav
