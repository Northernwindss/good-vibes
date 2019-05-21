import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { updateUserId, updateUsername } from '../../redux/reducer'

class LogoutComp extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  handleLogoutSubmit = async (e) => {
    e.preventDefault()
    const { username } = this.state
    try {
      const res = await axios.get(`/auth/logout`,
        {
          username

        })
      console.log(`handleLogout @ logout`, res.data.username)
      this.props.history.push(`/auth/login`)
    } catch (err) {
      this.setState({ username: '' })
    }
  }

  render() {
    return (
      <>
        <div>
          <button onClick={this.handleLogoutSubmit}>Logout</button>

        </div>


      </>

    )
  }
}

const mapStateToProps = (reduxState) => {
  console.log(`mapState @ logoutComp`, reduxState)
  return {
    username: reduxState.username
  }
}

export default connect(mapStateToProps)(withRouter(LogoutComp))