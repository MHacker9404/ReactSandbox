import React from 'react';

//  use this version to help decorate with infrastructure type code - error handling, http calls
//  more focused on the logic vs the JSX rendering
const withClassName = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClassName;
