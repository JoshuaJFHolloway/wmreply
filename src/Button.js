import React from 'react';

const buttonStyle = { fontFamily: 'Roboto', width: 130 };
const padding = { paddingTop: 5, paddingLeft: 60, paddingBottom: 5 };

const Button = (props) => {

  return (
    <div style = {padding} >
      <button
        style={buttonStyle}
        name={props.name}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  )
};

export default Button;