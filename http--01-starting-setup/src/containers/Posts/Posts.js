import React, { Component } from 'react';
import './Posts.css'
import axios from '../../axios';
import Post from '../../components/Post/Post';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
    }

    async componentDidMount() {
        const response = await axios.get('posts/?_limit=6');
        const posts = response.data.map(post => ({ ...post, author: 'Max' }));
        this.setState({ posts });
    }

    postSelectedHandler = (id) => {
        this.props.history.push('/posts/' + id);
    }

    render() {
        return (
            <div>
                <section className="Posts">
                    { this.state.posts.map(post => {
                        return (
                            <Post
                                key={ post.id }
                                title={ post.title }
                                author={ post.author }
                                clicked={ () => this.postSelectedHandler(post.id) }
                            />
                        )
                    })
                    }
                </section >
                <Route path={ this.props.match.url + '/:id' } exact component={ FullPost } />
            </div>
        );
    }
}

export default Posts;