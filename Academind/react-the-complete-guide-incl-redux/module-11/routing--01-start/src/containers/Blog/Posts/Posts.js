import React, { Component } from 'react';
import css from './Posts.module.scss';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    };

    componentDidMount() {
        axios
            .get('/posts')
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: 'Max',
                    };
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
            })
            .catch((error) => {
                console.error(error);
                // this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    };

    render() {
        const postsView = this.state.error ? (
            <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        ) : (
            this.state.posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                );
            })
        );
        return <div className={css.Posts}>{postsView}</div>;
    }
}

/*
        if (!this.state.error) {
        }
 <section className={css.Posts}>{posts}</section>
 */

export default Posts;
