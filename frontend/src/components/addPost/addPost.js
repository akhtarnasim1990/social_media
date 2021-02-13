import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './addPost.css';

class addPost extends Component {
    state = {
        title: '',
        content: '',
        // author: 'Max',
        submitted: false,
        user: ''
    }
    
    postDataHandler = () => {
    let get_token =  JSON.parse(localStorage.getItem("token"));
    // const user = get_token.data.user.firstname;
    const data = {
        title: this.state.title ,
        content: this.state.content ,
        // author: this.state.author
        
    }
    axios.post('/posts' , data , {
        headers: {
            'authorization': get_token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
    })
              .then(response => {
                  console.log(response)
                  this.props.history.replace('/allpost');
                //   this.setState({submitted: true})
              })
    }

    componentDidMount () {
        // If unauth => this.props.history.replace('/posts')
        console.log('------------------------------------------------------')
        console.log(this.props)
    }

    render () {
       
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/allpost" />;
        }
        return (
            <div className="addPost">
                { redirect }
                <h3>Add a Post</h3>

                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                {/* <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select> */}
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default addPost;