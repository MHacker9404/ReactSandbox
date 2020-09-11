import React from 'react';
import css from './Post.module.scss';
import { withRouter } from 'react-router-dom';

const post = (props) => {
    console.info(props);

    return (
        <article className={css.Post} onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className={css.Info}>
                <div className={css.Author}>{props.author}</div>
            </div>
        </article>
    );
};

export default withRouter(post);
