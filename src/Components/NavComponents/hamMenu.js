import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HamMenu extends Component {



  render() {
    return (

      <div
        class='icon'
        className='Nav-Links'>
        <Link to='/'>Home</Link>
        <Link to='/profile/'>Profile</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact-us'>Contact Us</Link>
        <Link to='/forums'>Forums</Link>
      </div>

    )
  }


}

export default HamMenu