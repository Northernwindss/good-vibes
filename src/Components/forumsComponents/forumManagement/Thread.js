import React, { Component } from 'react'
import ForumEdit from '../../forumsComponents/forumManagement/forumEdit'
// import { updateComment, updateCommentId, updateThreadId, updateUserForm } from '../../../redux/reducer'
import { connect } from 'react-redux'


export default class Thread extends Component {
  constructor() {
    super()

    this.state = {
      edit: false
    }
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    let { thread } = this.props
    return (
      this.state.edit ? <ForumEdit thread={thread}
      //  updateAnimal={this.props.updateAnimal} 
      /> :
        <div style={{ border: '1px solid #eee', margin: 10 }}>
          <p>comment_id: {thread.comment_id}</p>
          <p>thread_id: {thread.thread_id}</p>
          <p>comment: {thread.comment}</p>
          <button onClick={this.toggleEdit}>edit</button>
        </div>
    )
  }
}


// const mapStateToProps = (reduxState) => {
//   return {
//     comment_id: reduxState.comment_id,
//     thread_id: reduxState.thread_id,
//     user_forum_name: reduxState.user_forum_name,
//     comment: reduxState.comment
//   }
// }

// export default connect(mapStateToProps, { updateComment, updateCommentId, updateThreadId, updateUserForm })(Thread)

