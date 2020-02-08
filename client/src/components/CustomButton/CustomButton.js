import React from 'react';
import './CustomButton.scss';
import classNames from 'classnames';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={classNames({
      'custom-button': true,
      'custom-button--google': isGoogleSignIn,
      'custom-button--inverted': inverted
    })}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
