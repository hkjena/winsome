import React from 'react';

import './styles.scss';

const Input = ({ handelChange, label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handelChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
