import React from 'react';
import Information from './Information';
import Picture from './Picture';

const wrapperStyle = { width: 250, margin: 20 };
const informationStyle = { paddingTop: 10 };

const Results = (props) => {
  return (
    <div style={wrapperStyle}>
      <Picture
        image={props.image}
      />
      <div style={informationStyle}>
        <Information
          firstName={props.firstName}
          lastName={props.lastName}
          email={props.email}
        />
      </div>
    </div>
  );
};

export default Results;