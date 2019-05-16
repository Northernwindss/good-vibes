import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { updateComment, updateCommentId, updateThreadId, updateUserForm } from '../../../redux/reducer'

// export default 
class CreateThread extends Component {
  constructor() {
    super()

    this.state = {
      comment_id: 0,
      thread_id: 0,
      user_forum_name: '',
      comment: '',

      // users_id figure out later
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    console.log('handleclick1111 @ createThread', this.state.comment)
    let newComment = this.state.comment
    this.props.createThread(newComment)
    console.log('handleclick @ createThread', 456456456, newComment)
  }

  render() {
    console.log('createThread @ render', this.state.comment)
    return (
      <div>
        <input
          placeholder='Create new thread here'
          onChange={(e) => this.setState({
            comment: e.target.value,
            comment_id: e.target.value

          })}
          subject=''
          text='comment' />
        <button onClick={this.handleClick}>Create Thread</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  updateComment, updateCommentId, updateThreadId, updateUserForm
}

export default connect(null, mapDispatchToProps)(withRouter(CreateThread))


