
import React, { Component } from 'react'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.handleUpvote = this.handleUpvote.bind(this)
    this.handleDownvote = this.handleDownvote.bind(this)
  }

  handleUpvote(post, key) {
    this.props.firebase.ref(`posts/${key}`).set({
      title: post.title,
      upvote: (post.upvote || 0) + 1,
      downvote: (post.downvote || 0 )
    })
  }

  handleDownvote(post, key) {
    this.props.firebase.ref(`posts/${key}`).set({
      title: post.title,
      upvote: (post.upvote || 0),
      downvote: (post.downvote || 0) + 1
    })
  }

  render () {
    if(this.props.loading) {
      return (<div>Loading</div>)
    }

    const posts = this.props.posts
    if(!posts) {
      return null
    }
    return (
      <div className='Posts'>
        {
          Object.keys(posts).map((key) => {
            return (
              <div key={key}>
                <div><strong>Title:</strong> { posts[key].title || '' }</div>
                <div>Upvote: { posts[key].upvote || 0 }</div>
                <div>Downvote: { posts[key].downvote || 0 }</div>
                <div>
                  <button onClick={() => {
                    this.handleUpvote(posts[key], key)
                  }}>Upvote</button>
                  <button onClick={() => {
                    this.handleDownvote(posts[key], key)
                  }}>Downvote</button>
                </div>
                <div style={{marginBottom: 20}}></div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Posts
