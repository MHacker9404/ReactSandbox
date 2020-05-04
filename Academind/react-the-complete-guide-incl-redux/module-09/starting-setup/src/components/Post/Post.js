import React from 'react';
import css from './Post.module.scss';

const post = (props) => (
    <article className={css.Post} onClick={props.onClicked}>
        <h1>{props.title}</h1>
        <div className={css.Info}>
            <div className={css.Author}>{props.author}</div>
        </div>
    </article>
);

export default post;
