import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateComment, updateCommentId, updateThreadId, updateUserForm } from '../../../redux/reducer'


// export default 
class ForumEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comment_id: this.props.comment_id,
      thread_id: this.props.thread_id,
      user_forum_name: this.props.user_forum_name,
      comment: this.props.comment,
      creator_id: this.props.user_id,
      errorMessage: ''
    }
  }

  handleCommentUpdate = async (e) => {
    console.log('handleCommentUp @ forumEdit',
      this.props.comment_id,
      this.props.thread_id,
      // this.props.user_forum_name, 
      this.props.comment,
      this.props.creator_id)
    let res = await axios.put(`/forums/${this.props.comment_id}`, {
      comment_id: this.props.comment_id,
      // thread_id: this.props.thread_id,
      // user_forum_name: this.props.user_forum_name,
      comment: this.state.comment,
      creator_id: this.props.creator_id
    })
    // console.log(res, `asdfadfasdfasdfasdfasdf123123`)
    await this.setState({
      errorMessage: res.data
    })
  }

  handleCommentDelete = async (e) => {
    console.log('handleComDelete @ forumEdit', this.props.comment_id, this.props.thread_id, this.props.user_forum_name, this.props.comment)
    let res = await axios.delete(`/forums/${this.props.comment_id}`, {
      comment_id: this.props.comment_id,
      // thread_id: this.props.thread_id,
      // user_forum_name: this.props.user_forum_name,
      // comment: this.props.comment,
      // test: 'string of testers'
    })
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    // this.props.something like updateUserDetail
  }


  handleClick = () => {
    let forumEditClick = { ...this.state }
    this.props.editThread(forumEditClick)
    console.log('handleClick @ forumEdit', ...this.state)
  }

  handleClick2 = () => {
    let forumDeleteClick = { ...this.state }
    this.props.deleteThread(forumDeleteClick)
    console.log(`handleClick2 @ forumEdit`, ...this.state)
  }

  render() {
    console.log(`render456789 @ forumEdit`, this.state.errorMessage)
    return (
      <div style={{ border: '1px solid black', margin: 20, display: 'flex', }}>
        {/* <input
          onChange={this.handleChange}
          name='comment_id'
          type='number'
          value={this.state.comment_id}
          placeholder='comment_id' />
        <input
          onChange={this.handleChange}
          name='thread_id'
          type='number'
          value={this.state.thread_id}
          placeholder='thread_id' /> */}
        <input
          onChange={this.handleChange}
          name='comment'
          type='text'
          value={this.state.comment}
          placeholder='comment' />
        <button onClick={this.handleCommentUpdate}> Update Thread</button>
        <button onClick={this.handleCommentDelete}>Delete Thread</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  updateCommentId,
  updateThreadId,
  updateUserForm,
  updateComment
}

const mappedStateToProps = (reduxState) => {
  return {
    comment_id: reduxState.comment_id,
    user_forum_name: reduxState.user_forum_name,
    thread_id: reduxState.thread_id,
    comment: reduxState.comment,
    creator_id: reduxState.user_id
  }

}


export default connect(mappedStateToProps, mapDispatchToProps)(withRouter(ForumEdit))

