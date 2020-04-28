import React from 'react';
import styles from './Layout.module.scss';

const layout = (props) => {
    return (
        <>
            <div>toolbar, sidedrawer, backdrop</div>
            <hr />
            <main>{props.children}</main>
        </>
    );
};

export default layout;
