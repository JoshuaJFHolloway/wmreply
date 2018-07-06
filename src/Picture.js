import React from 'react';

const wrapperStyle = { width: 200, height:200, borderRadius: '50%', paddingTop: 15};

const Picture = (props) => {
  return (
    <div>
      <img src={props.image} style={wrapperStyle} alt='users face'/>
    </div>
  );
};

export default Picture;
