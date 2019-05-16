import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateProfilePicture, updateProfileName, updateProfileBio, updateUserDetails } from '../../redux/reducer';
import axios from 'axios';

class EditProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profilePicture: this.props.profilePicture
      ,
      profileName: this.props.profileName
      ,
      profileBio: this.props.profileBio
      ,
      profileChange: false
    }
  }

  handleProfileInputUpdate = async (e) => {
    // this.setState({
    //   [e.target.name]: e.target.value
    // })
    // this.props.updateUserDetails(this.state)
    console.log('handleprof', this.props)
    let res = await axios.put(`/profile/${this.props.user_id}`, {
      profile_id: this.props.user_id,
      profile_picture: this.props.profilePicture,
      profile_name: this.props.profileName,
      profile_bio: this.props.profileBio
    })
    console.log('handleprof @ editprof', res.data)
  }
  // handleProfileInputUpdate2 = (e) => {
  //   // this.setState({
  //   //   [e.target.name]: e.target.value
  //   // })
  //   // this.props.updateUserDetails(this.state)
  //   console.log('handleprof', this.props)
  //   let res = axios.put(`/profile/${this.props.user_id}`, {
  //     profile_id: this.props.user_id,
  //     profile_picture: this.props.profilePicture,
  //     profile_name: this.props.profileName,
  //     profile_bio: this.props.profileBio
  //   })
  // }
  // handleProfileInputUpdate3 = (e) => {
  //   // this.setState({
  //   //   [e.target.name]: e.target.value
  //   // })
  //   // this.props.updateUserDetails(this.state)
  //   console.log('handleprof', this.props)
  //   let res = axios.put(`/profile/${this.props.user_id}`, {
  //     profile_id: this.props.user_id,
  //     profile_picture: this.props.profilePicture,
  //     profile_name: this.props.profileName,
  //     profile_bio: this.props.profileBio
  //   })
  // }


  handleProfileInputUpdate1 = (e) => {
    // console.log(6842654, handleProfileInputUpdate)
    this.setState({
      [e.target.name]: e.target.value
    })
    this.props.updateUserDetails(this.state)
  }
  handleProfileInputUpdate2 = (e) => {
    // console.log(6842654, handleProfileInputUpdate)
    this.setState({
      [e.target.name]: e.target.value
    })
    this.props.updateUserDetails(this.state)
  }
  handleProfileInputUpdate3 = (e) => {
    // console.log(6842654, handleProfileInputUpdate)
    this.setState({
      [e.target.name]: e.target.value
    })
    this.props.updateUserDetails(this.state)
  }


  // handleProfileInputUpdate3 = (e) => {
  //   // console.log(6842654, handleProfileInputUpdate)
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  render() {
    console.log('render editprofile', this.props)
    return (
      <>
        <div>
          <input
            onChange={this.handleProfileInputUpdate1}
            type='text'
            name='profilePicture'
            placeholder='Type new Profile Picture URL here'
            subject=''
          />
          <input
            onChange={this.handleProfileInputUpdate2}
            type='text'
            name='profileName'
            placeholder='Type name here'
            subject=''
          />

          <input
            onChange={this.handleProfileInputUpdate3}
            type='text'
            name='profileBio'
            placeholder='Type new Profile Bio here'
            subject=''
          />
          <button
            onClick={this.handleProfileInputUpdate}
          >change profile info</button>
          {/* <button
            onClick={() => this.props.updateProfileBio(this.state.profileBio)}
          >change profile bio</button> */}



        </div>

      </>
    )
  }

}



const mapDispatchToProps = {
  // updateUserId,
  updateProfilePicture,
  updateProfileName,
  updateProfileBio,
  updateUserDetails
}

const mappedStateToProps = (reduxState) => {
  return {
    user_id: reduxState.user_id,
    profilePicture: reduxState.profilePicture,
    profileName: reduxState.profileName,
    profileBio: reduxState.profileBio,
  }

}


export default connect(mappedStateToProps, mapDispatchToProps)(withRouter(EditProfile))



           // make on click event for axios call

            // onChange={(e) => this.setstate({
            //   profileName: e.target.value
            // })}


            // <input onchange={
            //   (e) => this.setState({})
            // } />