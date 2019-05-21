import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { updateUserId, updateUsername } from '../../redux/reducer'



class LoginComp extends Component {
  constructor() {
    super()
    this.state = {
      loginUsername: '',
      loginPassword: '',
      loginError: false,
      loginErrorMessage: 'Check username or password'
    }
  }

  handleFormInputUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      loginError: false
    })
  }

  handleLoginSubmit = async (e) => {
    e.preventDefault()
    const { loginUsername, loginPassword } = this.state
    try {
      const res = await axios.post(`/auth/login`,
        {
          loginUsername,
          loginPassword
        })
      console.log('trouble shooting login', res.data)
      this.props.updateUsername(loginUsername)
      this.props.updateUserId(res.data.user_id)
      // figure out why i can't get props on here when i log in -----with david
      console.log(659849684, this.props)
      this.props.history.push(`/profile/${this.props.user_id}`)
    } catch (err) {
      this.setState({ loginUsername: '', loginPassword: '', loginError: true })
    }
  }


  handleRegistration = () => {
    const { loginUsername, loginPassword } = this.state
    axios.post('/auth/register', { loginUsername, loginPassword }).then(response => {
      this.setState({
        loginUsername,
        loginPassword,
        users: response.data
      })
    })
  }

  // toggleView = () => {
  //   this.setState({
  //     view: this.state.view === 'login' ? 'register' : 'login'
  //   })
  // }


  render() {
    return (
      <>
        {/* {this.state.loginUsername ?
          <div>
            <h1>Welcome, {this.state.loginUsername.username}</h1>
          </div> : this.state.view === 'login'
        } */}
        <div className='Login'>

          <div>
            <span>

              < h1 >  Please Login or Register Here</h1>
            </span>

            < form onSubmit={this.handleLoginSubmit}>
              <input
                type='text'
                name='loginUsername'
                placeholder='username'
                value={this.state.loginUsername}
                onChange={this.handleFormInputUpdate}
              />
              <input
                type='text'
                name='loginPassword'
                placeholder='password'
                value={this.state.loginPassword}
                onChange={this.handleFormInputUpdate}
              />
              <button>Login</button>
              <button onClick={this.handleRegistration}>Register</button>
            </form>
          </div>
          {/* < h1 > Register </h1>
        < form onSubmit={this.handleLoginSubmit}>
        <input
        type='text'
            name='loginUsername'
            placeholder='username'
            value={this.state.loginUsername}
            onChange={this.handleFormInputUpdate}
            />
            <input
            type='text'
            name='loginPassword'
            placeholder='password'
            value={this.state.loginPassword}
            onChange={this.handleFormInputUpdate}
            />
          </form> */}

          {this.state.loginError && <h3>{this.state.loginErrorMessage}</h3>}
        </div>
      </>
    )
  }
}

const mapStateToProps = (reduxState) => {
  console.log(22222222222, reduxState)
  return {
    user_id: reduxState.user_id,
    profilePicture: reduxState.profilePicture,
    profileName: reduxState.profileName,
    profileBio: reduxState.profileBio,

  }
}
const mapDispatchToProps = {
  updateUserId,
  updateUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginComp))