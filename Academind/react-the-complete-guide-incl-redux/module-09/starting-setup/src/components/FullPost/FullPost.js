import React, { Component } from 'react';
import axios from 'axios';
import _cloneDeep from 'lodash/cloneDeep';

import css from './FullPost.module.scss';

class FullPost extends Component {
    state = {
        currentPost: {
            id: null,
            title: null,
            body: null,
        },
    };
    componentDidUpdate = async (prevProps, prevState) => {
        if (this.props.id && this.props.id !== this.state.currentPost.id) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`);
            const data = _cloneDeep(response.data);
            console.info('[FullPost]: componentDidUpdate', data);

            this.setState({ currentPost: data });
        }
    };

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = (
                <div className={css.FullPost}>
                    <h1>{this.state.currentPost.title}</h1>
                    <p>{this.state.currentPost.body}</p>
                    <div className={css.Edit}>
                        <button className={css.Delete}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;
