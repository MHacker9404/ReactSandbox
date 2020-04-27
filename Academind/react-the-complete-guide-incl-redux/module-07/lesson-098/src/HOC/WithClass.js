import React from 'react';

//  use this version to help change the styling
//  more focused on JSX that is rendered
const withClass = (props) => <div className={props.className}>{props.children}</div>;

export default withClass;
