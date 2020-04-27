import React from 'react';

//  use this version to help decorate with infrastructure type code - error handling, http calls
//  more focused on the logic vs the JSX rendering
const withClass2 = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
};

export default withClass2;
