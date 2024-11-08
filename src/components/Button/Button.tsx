import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.css';

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  children = 'Button',
  className = '',
  extraStyles = {},
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      style={extraStyles}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
