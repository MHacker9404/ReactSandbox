import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        console.info('[Posts}: ', this.props);

        const postsView = this.state.error ? (
            <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        ) : (
            this.state.posts.map((post) => {
                return (
                    <Link to={`/${post.id}`} key={post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    </Link>
                );
            })
        );
        return <div className={css.Posts}>{postsView}</div>;
    }
}

export default Posts;
