import React from 'react';

import './index.css';

const Index = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Index;
