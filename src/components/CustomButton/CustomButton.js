import React from 'react';
import './CustomButton.scss';
import classNames from 'classnames';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={classNames({
      'custom-button': true,
      'custom-button--google': isGoogleSignIn
    })}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
