import React, { Component } from 'react';
import axios from '../../axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    async componentDidUpdate(prevProps) {
        if (this.props.id && prevProps.id !== this.props.id) {
            try {
                const response = await axios.get(`posts/${ this.props.id }`);
                this.setState({ loadedPost: response.data });
            } catch (error) {
                console.log(error);
            }
        }
    }

    deletePostHandler = async () => {
        const response = await axios.delete(`posts/${ this.props.id }`);
        console.log(response);
    }

    render() {
        let post = <p>Please select a Post!</p>;

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