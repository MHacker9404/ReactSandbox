import React, { Component } from 'react';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error.toString() });
    };

    render() {
        if (this.state.hasError) {
            const message = this.state.errorMessage;
            return <h1>{message}</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
