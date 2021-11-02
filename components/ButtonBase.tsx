import React from 'react';

import cn from 'classnames';
import styles from '../styles/ButtonBase.module.scss';

type ButtonBaseProps = {
  children: string;
  buttonStyle?: 'blue' | 'red';
  className?: string;
};

const ButtonBase = ({ children, buttonStyle, className }: ButtonBaseProps) => (
  <button
    onClick={() => console.log('click!')}
    className={cn(
      styles.buttonBase,
      { [styles.blue]: buttonStyle === 'blue', [styles.red]: buttonStyle === 'red' },
      className,
    )}
  >
    {children}
  </button>
);

export default ButtonBase;
