import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LogoutComp from '../Landing/logoutComp';

const Nav = ({ username }) => (
  <nav className="NavBar">
    <div>R-U-BOARD</div>
    <div className='Nav-Links'>
      <Link to='/'>Home</Link>
      <Link to='/profile/'>Profile</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact-us'>Contact Us</Link>
      <Link to='/forums'>Forums</Link>
    </div>
    <div>

    </div>
    <div>Welcome, {username}</div>
    <div>
      <LogoutComp />
    </div>
  </nav>
)

// const mapDispatchToProps = {
//   updateUsername
// }

const mapStateToProps = (reduxState) => {
  return {
    username: reduxState.username
  }
}


export default connect(mapStateToProps)(withRouter(Nav))
