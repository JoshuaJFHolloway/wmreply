import React from 'react';

const wrapperStyle = { width: 200, paddingBottom: 15 };

const Information = (props) => {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div style={wrapperStyle}>
      <ul>{capitalizeFirstLetter(props.firstName)} {capitalizeFirstLetter(props.lastName)}</ul>
      {props.email}.
    </div>
  );
};

export default Information;
