import React from 'react';

import cn from 'classnames';
import styles from '../styles/ButtonBase.module.scss';

type ButtonBaseProps = {
  children: string;
  buttonStyle?: 'blue' | 'red';
  className?: string;
};

const ButtonBase = ({ children, buttonStyle, className }: ButtonBaseProps) => {
  const classes = cn(
    styles.btn,
    { [styles.blue]: buttonStyle === 'blue', [styles.red]: buttonStyle === 'red' },
    className,
  );

  return (
    <button onClick={() => console.log('click!')} className={classes}>
      {children}
    </button>
  );
};

export default ButtonBase;
