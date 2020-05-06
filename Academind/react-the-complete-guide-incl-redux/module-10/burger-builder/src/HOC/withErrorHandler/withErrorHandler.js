import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);

            //  moved to constructor - this needs to happen before child components are mounted
            axios.interceptors.request.use((request) => {
                this.setState({ error: null });
                return request;
            });
            axios.interceptors.response.use(
                (res) => res,
                (error) => this.setState({ error: error }),
            );
        }

        state = {
            error: null,
        };

        componentDidMount() {
            axios.interceptors.request.use((request) => {
                this.setState({ error: null });
                return request;
            });
            axios.interceptors.response.use(
                (res) => res,
                (error) => this.setState({ error: error }),
            );
        }

        closeErrorHandler = async () => this.setState({ error: null });

        render() {
            return (
                <>
                    <Modal show={this.state.error} close={this.closeErrorHandler}>
                        {this.state.error && this.state.error.message}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    };
};
export default withErrorHandler;
