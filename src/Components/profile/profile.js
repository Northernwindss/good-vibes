import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import axios from 'axios';
import EditProfile from './editProfile';
import { updateUserDetails } from '../../redux/reducer'
// import CreateProfile from './createProfile'


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      profilePicture: '',
      profileName: '',
      profileBio: '',
      isEditing: false
    }
    // this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit = () => {
    // console.log(454534, toggleEdit)
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

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
    this.props.updateUserDetails({
      profilePicture: res.data[0].profile_picture,
      profileName: res.data[0].profile_name,
      profileBio: res.data[0].profile_bio,
    })
  }

  // componentDidUpdate = (prevProps) => {
  //   if (prevProps.profileName !== this.props.profileName) {
  //     this.setState({
  //       profileName: this.props.profileName
  //     })
  //   }
  //   if (prevProps.profileName !== this.props.profileName) {
  //     this.setState({
  //       profileName: this.props.profileName
  //     })
  //   }
  //   if (prevProps.profileBio !== this.props.profileBio) {
  //     this.setState({
  //       profileBio: this.props.profileBio
  //     })
  //   }
  // }


  render() {
    // if (this.state.isEditing) {
    return (

      <div>

        <div>
          <img src={this.state.profilePicture} alt='profile pic' height='175px' width='150px' />
          <button onClick={this.toggleEdit}>Edit/Update</button>
        </div>


        <div>
          {this.state.profileName}
          <button
            onClick={this.toggleEdit}
          >Edit/Update</button>
        </div>


        <div>
          {this.state.profileBio}
          <button onClick={this.toggleEdit}>Edit/Update</button>
        </div>


        {/* does the same thing in order to check the state */}
        {/* {this.state.isEditing ? <EditProfile /> : null} */}
        {this.state.isEditing && <EditProfile />}
      </div>

    )
  }
}
// }


const mapStateToProps = (reduxState) => {
  return {
    user_id: reduxState.user_id,
    profilePicture: reduxState.profilePicture,
    profileName: reduxState.profileName,
    profileBio: reduxState.profileBio,
  }

}
export default connect(mapStateToProps, { updateUserDetails })(Profile)

// export default Profile