import React, { Component } from 'react'

class AddPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const val = e.target.value
    this.setState({
      title: val
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.firebase.ref('posts').push({
      title: this.state.title
    })
    this.setState({
      title: ''
    })
  }

  render () {
    return (
      <div className='AddPost'>
        <input type='text' placeholder='Write title of your post' value={this.state.title} onChange={this.handleChange} />
        <div>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default AddPost
