import React, { Component } from 'react';
import axios from '../../axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
        selectedPostId: null,
    }

    async componentDidMount() {
        await this.loadData();
    }

    async componentDidUpdate() {
        await this.loadData();
    }

    async loadData() {
        const postId = +this.props.match.params.id;

        if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== postId)) {
            try {
                const response = await axios.get(`posts/${ postId }`);
                this.setState({ selectedPostId: postId, loadedPost: response.data });
            } catch (error) {
                console.log(error);
            }
        }
    }

    deletePostHandler = async () => {
        const response = await axios.delete(`posts/${ this.state.selectedPostId }`);
        console.log(response);
    }

    render() {
        let post = <p>Loading...</p>;

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{ this.state.loadedPost.title }</h1>
                    <p>{ this.state.loadedPost.body }</p>
                    <div className="Edit">
                        <button className="Delete" onClick={ this.deletePostHandler }>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;