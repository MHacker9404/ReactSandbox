import React, { Component } from 'react';
import axios from 'axios';
import _cloneDeep from 'lodash/cloneDeep';
import _slice from 'lodash/slice';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import css from './Blog.module.scss';

import log from '../../logger';
const _log = log('blog');

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        posts: [],
        currentPostId: null,
    };

    componentDidMount = async () => {
        // axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        //     const posts = _cloneDeep(_slice(response.data, 0, 4));
        //     const authoredPosts = posts.map((post) => ({
        //         ...post,
        //         author: 'Phil',
        //     }));
        //     this.setState({ posts: authoredPosts });
        // });
        try {
            const response = await axios.get('/posts');
            const posts = _cloneDeep(_slice(response.data, 0, 4));
            const authoredPosts = posts.map((post) => ({
                ...post,
                author: 'Phil',
            }));
            this.setState({ posts: authoredPosts });
        } catch (error) {
            _log.error('Exception', error);
        }
    };

    onArticleSelected = async (id) => {
        this.setState({ currentPostId: id });
    };

    render() {
        const postsView = this.state.posts.map((post) => (
            <Post
                key={post.id}
                title={post.title}
                author={post.author}
                onClicked={async () => await this.onArticleSelected(post.id)}
            />
        ));

        return (
            <div>
                <section className={css.Posts}>{postsView}</section>
                <section>
                    <FullPost id={this.state.currentPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
