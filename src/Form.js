import React from 'react';
import Button from './Button';

const Form = (props) => {
  return (
    <div>
      <input
        type='text'
        placeholder="Enter a first name"
        name='first'
        onChange={props.onChange}
      />
      <input
        type='text'
        name='last'
        placeholder="Enter a last name"
        onChange={props.onChange}
      />
      <input
        type='text'
        name='email'
        placeholder="Enter an email address"
        onChange={props.onChange}
      />
      <Button
        name='submit'
        onClick={props.onClick}
        title='Submit User'
      />
    </div>
  )
};

export default Form;