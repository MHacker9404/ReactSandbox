import React, { Component } from 'react';
// import axios from 'axios';

import css from './Blog.module.scss';

import Posts from './Posts/Posts';

class Blog extends Component {
    render() {
        return (
            <div className={css.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/new-post">New Post</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Posts />
            </div>
        );
    }
}

export default Blog;