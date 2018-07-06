import React from 'react';

const wrapperStyle = { width: 380 };

const Information = (props) => {

  return (
    <div style={wrapperStyle}>
      <ul>{props.firstName} {props.lastName}</ul>
      {props.email}.
    </div>
  );
};

export default Information;
