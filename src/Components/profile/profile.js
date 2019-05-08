import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import axios from 'axios';
// import CreateProfile from './createProfile'


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      profilePicture: '',
      profileName: '',
      profileBio: '',

    }
  }
  //   componentDidMount = aysnc(e) => {
  //     // const { profilePicture, profileName, profileBio} = this.state
  //     try{
  //       const res = await axios.get(`/profile`, {profilePicture, profileName, profileBio})
  //       // this.props.
  //   // console.log(res)
  //   this.setState({
  //     profileName: res.data.profileName
  //   })
  // }
  // }

  async componentDidMount() {
    // const { profilePicture, profileName, profileBio} = this.state
    const res = await axios.get(`/profile/${this.props.match.params.id}`)
    // this.props.
    console.log(888888, 'profile.js', res)
    this.setState({
      profilePicture: res.data[0].profile_picture,
      profileName: res.data[0].profile_name,
      profileBio: res.data[0].profile_bio,
    })
  }

  render() {
    return (
      <div>
        {/* <img
          Component={this.state.profilePicture}
        /> */}
        <img src={this.state.profilePicture} alt='profile pic' height='175px' width='125px' />
        <button>button</button>
        {this.state.profileName}
        <button>button</button>
        {this.state.profileBio}
        <button>button</button>

      </div>

    )

  }

}

const mapStateToProps = (reduxState) => {
  return {
    user_id: reduxState.user_id,
    profilePicture: reduxState.profilePicture,
    profileName: reduxState.profileName,
    profileBio: reduxState.profileBio,
  }

}
export default connect(mapStateToProps)(Profile)

// export default Profile