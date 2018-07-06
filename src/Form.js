import React from 'react';
import Button from './Button';

const Form = (props) => {

  const inputArray = [];
  const name = ["first", "last", "email"];
  const placeholder =["Enter a forename", "Enter a surname", "Enter an email"];
  const inputStyle = { width: 121, paddingLeft: 60 };

  for (let i = 0; i < 3; i++) {
    inputArray.push(
      <input
        type='text'
        name={name[i]}
        placeholder={placeholder[i]}
        onChange={props.onChange}
      />
    )
  }

  return (
    <div>
      <div style={inputStyle}>
        {inputArray}
      </div>
      <div>
        <Button
          name='submit'
          onClick={props.onClick}
          title='Submit User'
        />
      </div>
    </div>
  )
};

export default Form;