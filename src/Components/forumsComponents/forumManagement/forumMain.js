import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import CreateThread from './createThread';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateComment, updateCommentId, updateThreadId, updateUserForm } from '../../../redux/reducer'
import Thread from '../forumManagement/Thread'
import forumTopicComp from '../../forumsComponents/forumTopicComp'

// export default 
class ForumsMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      threads: [],
      filterThreads: '',
    }


  }


  componentDidMount() {
    axios.get(`/forums/:id/?`).then(res => {
      this.setState({
        threads: res.data
      })
    }).catch(err => console.log('compdidmount @ forum main', err))
  }


  createThread = (newComment) => {
    axios.post(`/forums/:id/?`, { comment: newComment, creator_id: this.props.creator_id }).then(res => {
      console.log('createthread @ setstate', res.data)
      this.setState({
        // something here:res.data
        comment: res.data,
        comment_id: res.data,
        creator_id: res.data
      })
    }).catch(error => console.log('createthread @ main', error))
  }

  editThread = (forumEditClick) => {
    axios.put(`/forums/${this.props.comment_id}`, {
      comment_id: this.props.comment_id,
      creator_id: this.props.creator_id,
      comment: this.props.comment
    }).then(res => {
      this.setState({
        comment: res.data,
        creator_id: res.data
      })
    })
    // console.log('editThread @ forumMain', res.data)
  }

  deleteThread = () => {
    console.log(`deleteThread @ forumMain`, this.props)
    axios.delete(`/forums/${this.props.comment_id}`, {
      comment_id: this.props.comment_id,
      thread_id: this.props.thread_id,
      user_forum_name: this.props.user_forum_name,
      comment: this.props.comment
    }).then(res => {
      this.setState({
        comment: res.data
      })
    })
    // console.log('deleteThread @ forumMain', res.data)
  }



  render() {
    console.log('render @ forumMain', this.state.threads)
    return (
      <>
        {/* <h1>Forums</h1>
        <p> Please allow a polite discourse on all the topics
        </p> */}

        {/* <nav> */}
        {/* <Link to='/forums/best-starburst-flavor'>Best Starbust Flavor</Link>
          <Link to='/forums/best-travel-destinations'>Best Travel Destinations</Link>
          <Link to='/forums/DevMountain-is-awesome'>DevMountain is Awesome!</Link>

          <Switch>
            <Route
              path='/forums/best-starburst-flavor'
              component={Thread}
            />
            <Route
              path='/forums/best-travel-destinations'
              component={Thread}
            />
            <Route
              path='/forums/DevMountain-is-awesome'
              component={Thread}
            />
          </Switch>


        </nav>
 */}



        <div>

          <CreateThread createThread={this.createThread}

          />
          {this.state.threads.filter(comment => {
            // console.log('return123123 @ forumMain', comment)
            return { comment }
            // return {

            //   // comment_id: res.data,
            //   // comment: res.data
            // }
            // (this.state.filterThreads);
          })
            .map(comment => {
              return (
                <span>
                  {comment.user_id}
                  {comment.user_forum_name}
                  {comment.comment}
                  <Thread
                    thread={comment}
                  />

                </span>

              )
            })

          }

        </div>

      </>
    )
  }


}


const mapStateToProps = (reduxState) => {
  return {
    comment_id: reduxState.comment_id,
    thread_id: reduxState.thread_id,
    user_forum_name: reduxState.user_forum_name,
    comment: reduxState.comment,
    creator_id: reduxState.user_id
  }
}

export default connect(mapStateToProps, { updateComment, updateCommentId, updateThreadId, updateUserForm })(ForumsMain)



        // every comment should have a thread id then when we map thru we need to render over every comment that matches the thread id map over comments and filter them











        // export default Forums




// {/* 
// {/* {this.state.threads.filter((comment, comment_id) => {
// return (comment.comment_id, comment)
// })
// .map(comment => {
//   console.log('render @ forumMain in map', comment) */}
// {/* return (
// {/* <ForumsMain */}
// {/* id={comment.comment_id} */ }
// {/* key={comment} */ }
// {/* /> */ }
// {/* {comment.comment_id} */ } * /} */}
// // app.whateber