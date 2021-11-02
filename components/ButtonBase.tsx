import React from 'react';

import cn from 'classnames';
import styles from '../styles/ButtonBase.module.scss';

type ButtonBaseProps = {
  children: string;
  blue?: boolean;
};

const ButtonBase = ({ children, blue = false }: ButtonBaseProps) => (
  <button
    onClick={() => console.log('click!')}
    className={cn(styles.buttonBase, { [styles.blue]: blue })}
  >
    {children}
  </button>
);

export default ButtonBase;
