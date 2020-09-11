import React, { Component } from 'react';
import css from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
// import _isEqual from 'lodash/isEqual';

class Modal extends Component {
    componentDidUpdate = (prevProps, prevState) => {
        // console.info('[Modal] componentDidUpdate: ');
    };

    shouldComponentUpdate = (nextProps, nextState, nextContext) => {
        const update = nextProps.show !== this.props.show || nextProps.children !== this.props.children;
        // const result = _isEqual(this.props, nextProps);
        // console.info(`[Modal] shouldComponentUpdate - ${result}:${update}`);
        return update;
    };

    render = () => {
        return (
            <>
                <Backdrop show={this.props.show} clicked={this.props.close} />
                <div
                    className={css.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                    }}>
                    {this.props.children}
                </div>
            </>
        );
    };
}

export default Modal;
