import React, { Component } from 'react';
import css from './BurgerBuilder.module.scss';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>Burger</div>
                <hr />
                <div>Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;
