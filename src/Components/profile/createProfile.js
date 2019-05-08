import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

export default class CreateProfile extends Component {
  constructor() {
    super()
    this.state = {
      profilePicture: '',
      profileName: '',
      profileBio: '',

    }
  }

  handleProfileInputUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    <>
      {/* <img src={this.state.profilePicture} height='100px' width='100px' /> */}
      <input
        type='text'
        name='Profile Name'
        placeholder='Type name here'
        onChange={(e) => this.setstate({
          profileName: e.target.value
        })}
      />
      <input
        type='text'
        name='Profile Name'
        placeholder='Type name here'
        onChange={(e) => this.setstate({ profileBio: e.target.value })}
      />
    </>
  }


}


const mapDispatchToProps = {
  updateUserId,
  updateProfilePicture,
  updateProfileName,
  updateProfileBio
}

export default connect(mapDispatchToProps)(withRouter(CreateProfile))

