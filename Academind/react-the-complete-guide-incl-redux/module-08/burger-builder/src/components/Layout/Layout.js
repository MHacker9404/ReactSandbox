import React from 'react';
import css from './Layout.module.scss';

const layout = (props) => {
    return (
        <>
            <div>toolbar, sidedrawer, backdrop</div>
            <hr />
            <main className={css.content}>{props.children}</main>
        </>
    );
};

export default layout;
