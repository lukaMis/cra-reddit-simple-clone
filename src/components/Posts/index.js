
import React, { Component } from 'react'

class Posts extends Component {
  render () {
    const posts = this.props.posts
    return (
      <div className='Posts'>
        {
          Object.keys(posts).map((key) => {
            return (
              <div key={key}>
                {posts[key].title}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Posts
