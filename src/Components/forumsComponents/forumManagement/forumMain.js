import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import CreateThread from './createThread';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateComment, updateCommentId, updateThreadId, updateUserForm } from '../../../redux/reducer'
import Thread from '../forumManagement/Thread'

// export default 
class ForumsMain extends Component {
  constructor() {
    super()

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
    axios.post(`/forums/:id/?`, { comment: newComment }).then(res => {
      console.log('createthread @ setstate', res.data)
      this.setState({
        // something here:res.data
        comment: res.data,
        comment_id: res.data
      })
    }).catch(error => console.log('createthread @ main', error))
  }



  render() {
    console.log('render @ forumMain', this.state.threads)
    return (
      <>
        <h1>Forums</h1>
        <p> Please allow a polite discourse on all the topics
        </p>

        <nav>

          <h1>
            <Route path='/middle-eastern-genocide' />
            <Link to='/middle-eastern-genocide'>Middle Eastern Genocide</Link>
          </h1>

          <h1>
            <Route path='/anti-vaxing' />
            <Link to='/anti-vaxing'>Truth About Vaccines</Link>
          </h1>

          <h1>
            <Route path='/Trump' />
            <Link to='/best-president-ever'>President Trump Miracle in the Making</Link>
          </h1>

        </nav>




        <div>

          <CreateThread createThread={this.createThread}

          />
          {this.state.threads.filter(comment => {
            console.log('return123123 @ forumMain', comment)
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

                  {comment.comment}


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
    comment: reduxState.comment
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