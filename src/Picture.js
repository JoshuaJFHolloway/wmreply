import React from 'react';

const wrapperStyle = { width: 350 };

const Picture = (props) => {
  return (
    <div>
      <img src={props.image} style={wrapperStyle} alt="users face"/>
    </div>
  );
};

export default Picture;
