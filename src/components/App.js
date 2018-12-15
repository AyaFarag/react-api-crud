import React, { Component } from 'react';
import List from './List';
import Form from './Form';
import Axios from 'axios';
import '../style/App.css';

class App extends Component {

  state ={
    posts: [
        {
            title: '',
            body: ''
        }
    ]
}

  addpost = () => {
    Axios.post('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        console.log(res)
        let { posts } = this.state.posts;
        posts.push(res)
        this.setState({posts})
    })
}

  render() {
    return (
      <div className="App">
        <h3>API crud App</h3>
        <Form addposts={this.addpost}/>
        <List />
      </div>
    );
  }
}

export default App;
