import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import css from './Blog.module.scss';
import Posts from './Posts/Posts';

// import NewPost from './NewPost/NewPost';
// import asyncComponent from '../../HOC/asyncComponent';
// const AsyncNewPost = asyncComponent(() => {
//     return import('./NewPost/NewPost');
// });

const LazyPosts = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
    render() {
        const state = { auth: true };
        return (
            <div className={css.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to='/posts/'
                                    exact
                                    activeClassName='my-active'
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline',
                                    }}>
                                    Posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: '/new-post',
                                    }}
                                    exact>
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                {/* <Posts /> */}
                <Switch>
                    {/* {state.auth ? <Route path='/new-post' component={NewPost} /> : null} */}
                    {/* {state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null} */}
                    {state.auth ? (
                        <Route
                            path='/new-post'
                            render={() => (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LazyPosts />
                                </Suspense>
                            )}
                        />
                    ) : null}
                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1>Not Found</h1>} /> {/* catch all - 404 error */}
                    {/* <Redirect from='/' to='/posts' /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;
