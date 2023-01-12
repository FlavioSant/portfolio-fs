import classNames from 'classnames';
import { ChangeEvent, TextareaHTMLAttributes } from 'react';
import { Label } from './Label';

import styles from './Textarea.module.scss';

interface TextareaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'onChange'
  > {
  name: string;
  label: string;
  value: string;
  onChange?: (value: string, event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
  className,
  name,
  label,
  value,
  onChange,
  ...rest
}: TextareaProps) => {
  return (
    <div className={classNames(styles['textarea'], className)}>
      <Label htmlFor={name}>{label}</Label>
      <textarea
        className={styles['textarea-field']}
        id={name}
        name={name}
        value={value}
        onChange={e => onChange && onChange(e.target.value, e)}
        {...rest}
      />
    </div>
  );
};
