import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import css from './Posts.module.scss';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

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
        // this.setState({ selectedPostId: id });
        // this.props.history.push(`/${id}`);
        this.props.history.push({ pathname: `/posts/${id}` });
    };

    render() {
        console.info('[Posts}: ', this.props);

        const postsView = this.state.error ? (
            <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        ) : (
            this.state.posts.map((post) => {
                return (
                    // <Link to={`/${post.id}`} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                    // </Link>
                );
            })
        );
        return (
            <>
                <section className={css.Posts}>{postsView}</section>
                {/* <Route path='/posts/:id' exact component={FullPost} /> */}
                <Route path={`${this.props.match.url}/:id`} exact component={FullPost} />
            </>
        );
    }
}

export default Posts;
