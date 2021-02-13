import React, { Component } from 'react';
import axios from 'axios'
import Post from '../../components/Posts/Post'
import { Route } from 'react-router-dom'
import './Posts.css';
import FullPost from '../FullPost/FullPost'

class Posts extends Component {
    state = {
        posts : [] ,
        // selectedPostId : null ,
        // error : false
    }

    componentDidMount () {
        console.log(this.props)
        let get_token =  JSON.parse(localStorage.getItem("token"));
        axios.get ('/allpost' , {
            headers: {
                'authorization': get_token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response)
                const posts = response.data.posts        //.slice(0 , 4)
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post ,
                    // author: 'Nasim'
                    }
                })
                this.setState({posts: updatedPosts})
                // console.log(response)
            })
            .catch(error => {
                console.log(error )
                // this.setState({error:true})
            })
    }

    postSelectedHandler = (id) => {
        // this.props.history.push({pathname: '/posts' + id});
        this.props.history.push('/posts/' + id);
    }

    render () {
    // let get_token =  JSON.parse(localStorage.getItem("token"));
    // let firstname = get_token.data.user.firstname;
        let posts = <p>Something went wrong...!</p>
        if(!this.state.error){
            posts = this.state.posts.map((post) => {
                return (
                    // <Link to={'/posts/' + post.id} >
                        <Post 
                            key={post._id}
                            title={post.title}
                            author={post.author}
                            content={post.content}
                            // firstname={post.user}
                            clicked={() => this.postSelectedHandler(post.id)}/>
                    // </Link>
                );
            });
        } 
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
            
        ); 
    }
}

export default Posts;