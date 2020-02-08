import React from 'react';
import './FormInput.scss';
import classNames from 'classnames';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='form'>
    <input className='form__input' onChange={handleChange} {...otherProps} />
    {
      label ? (
        <label className={classNames({
          form__label: true,
          'form__label--shrink': otherProps.value.length
        })} >
          {label}
        </label>
      )
        : null
    }
  </div>
)

export default FormInput;