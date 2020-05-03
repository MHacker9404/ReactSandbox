import React from 'react';
import css from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
// import WithClassName from '../../../HOC/withClassName';

const modal = (props) => {
    return (
        <>
            <Backdrop show={props.show} clicked={props.close} />
            <div
                className={css.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}>
                {props.children}
            </div>
        </>
    );
};

// export default WithClassName(modal, css.Modal);
export default modal;
