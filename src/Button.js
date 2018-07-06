import React from 'react';

const Button = (props) => {

  return (
    <div>
      <button
        name={props.name}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  )
};

export default Button;