import classNames from 'classnames';
import { ChangeEvent, InputHTMLAttributes } from 'react';

import { Label } from './Label';

import styles from './Input.module.scss';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  name: string;
  label: string;
  value: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  className,
  name,
  label,
  value,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <div className={classNames(styles['input'], className)}>
      <Label htmlFor={name}>{label}</Label>
      <input
        className={styles['input-field']}
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={e => onChange && onChange(e.target.value, e)}
        {...rest}
      />
    </div>
  );
};
