import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

import './Blog.css';

const AsyncNewPost = asyncComponent(() => import('../NewPost/NewPost'));

class Blog extends Component {
    state = {
        auth: false
    }

    render() {
        const admin = this.state.auth
            ? <li><NavLink to="/admin">Admin</NavLink></li>
            : null;

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts">Posts</NavLink></li>
                            <li><NavLink to={ {
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            } }>New Post</NavLink></li>
                            { admin }
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={ () => <Posts /> } />
                <Route path="/new-post" render={ () => <NewPost /> } /> */}
                <Switch>
                    <Route path="/posts" component={ Posts } /> : null
                    <Route path="/new-post" exact component={ AsyncNewPost } />
                    { this.state.auth ? <Route path="/admin" exact render={ () => <h1>Admin</h1> } /> : null }
                    <Route render={ () => <h1>Not Found!</h1> } />
                    {/* <Redirect from="/" to="/posts" /> */ }
                </Switch>
            </div>
        );
    }
}

export default Blog;