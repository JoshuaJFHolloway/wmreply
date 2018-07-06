import React from 'react';
import Button from './Button';

const Form = (props) => {

  const inputArray = [];
  const name = ["first", "last", "email"];
  const placeholder =["Enter a forename", "Enter a surname", "Enter an email"];

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
      {inputArray}
      <Button
        name='submit'
        onClick={props.onClick}
        title='Submit User'
      />
    </div>
  )
};

export default Form;