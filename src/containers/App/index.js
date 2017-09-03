import React, { Component } from 'react'
import * as firebase from 'firebase'

import config from './firebase-config'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firebaseRef: null,
      posts: '',
      loading: true
    }
    firebase.initializeApp(config)
  }
  
  componentWillMount() {
    const postRef = firebase.database().ref('posts')
    const self = this
    postRef.on('value', (snapshot) => {
      console.log('snapshot.val()', snapshot.val() )
      self.setState({
        posts: snapshot.val(),
        loading: false
      })
    })
  }

  render() {
    return (
      <div className="App">
        {this.props.children && React.cloneElement(this.props.children, {
          firebaseRef: firebase.database().ref('posts'),
          posts: this.state.posts,
          loading: this.state.loading
        })}
      </div>
    )
  }
}

export default App
