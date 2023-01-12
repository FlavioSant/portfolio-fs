import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

export const Button = ({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={classNames(styles['button-container'], className)}
      {...rest}
    >
      {children}
    </button>
  );
};
