import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import Thread from '../forumsComponents/forumManagement/Thread'
import CreateThread from '../forumsComponents/forumManagement/createThread'
import ForumsMain from '../forumsComponents/forumManagement/forumMain'

class ForumTopicComp extends Component {
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

  render() {
    return (
      <>
        <div className="Forums" >

          <h1>Forums</h1>
          <p> Please allow a polite discourse on all the topics
        </p>

          <nav>
            {/* <Link to='/forums/best-starburst-flavor'>Best Starbust Flavor</Link>
          <Link to='/forums/best-travel-destinations'>Best Travel Destinations</Link> */}
            <Link to='/forums/DevMountain-is-awesome'>Favorite things about DevMountain!!</Link>

            <Switch>
              {/* <Route
              path='/forums/best-starburst-flavor'
              component={Thread}
            />
            <Route
            path='/forums/best-travel-destinations'
              component={Thread}
            /> */}
              <Route
                path='/forums/DevMountain-is-awesome'
                component={Thread}
              />
            </Switch>
          </nav>
          <ForumsMain />
        </div>
      </>
    )
  }
}

export default ForumTopicComp


// usercheck sql used to see if this person is already logged in or registered

// is the person trying to delete this check the id of the person trying to delete the thread if is true then delete thread otherwise error message letting them know that they cant delete that

// comment id is equal to usere id