import React, { Component } from 'react';


export default class ForumEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comment_id: props.thread.comment_id,
      thread_id: props.thread.thread_id,
      user_forum_name: props.thread.user_forum_name,
      comment: process.thread.comment,

    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleClick = () => {
    let animal = { ...this.props.animal, ...this.state }
    this.props.updateAnimal(animal)
  }

  render() {
    return (
      <div style={{ border: '1px solid black', margin: 20, display: 'flex', }}>
        <input
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
          placeholder='thread_id' />
        <input
          onChange={this.handleChange}
          name='comment'
          type='text'
          value={this.state.comment}
          placeholder='comment' />
        <button onClick={this.handleClick}> update animal</button>
      </div>
    )
  }
}
