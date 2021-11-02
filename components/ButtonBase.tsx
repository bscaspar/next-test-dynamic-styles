import React from 'react';

import cn from 'classnames';
import styles from '../styles/ButtonBase.module.scss';

type ButtonBaseProps = {
  children: string;
  blue?: boolean;
  className?: string;
};

const ButtonBase = ({ children, blue = false, className }: ButtonBaseProps) => (
  <button
    onClick={() => console.log('click!')}
    className={cn(styles.buttonBase, { [styles.blue]: blue }, className)}
  >
    {children}
  </button>
);

export default ButtonBase;
