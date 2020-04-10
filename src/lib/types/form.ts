import { SyntheticEvent } from 'react';

export interface FieldProps {
  name: string;
  type: string;
  label: string;
  options?: OptionsObject;
  selected?: string;
  required?: boolean;
  checked?: boolean;
  value?: string;
  valid?: boolean;

  normalize?: (value: string) => string;
  validate?: (value: string) => [boolean, string];
  onValidate?: (value: boolean) => void;
  onValid?: () => void;
  onInvalid?: (error: string) => void;
}

export interface OptionsObject {
  [key: string]: {
    label: string;
    name?: string;
    value?: string | number;
  };
}

export interface RadioFieldProps extends FieldProps {
  type: 'toggle' | 'group' | 'tabs';
  onChange: (event: SyntheticEvent<HTMLInputElement>) => void;
}

export interface SelectFieldProps extends FieldProps {
  type: 'select';
  multiple?: boolean;
  searchable?: boolean;
  onChange?: (event: SyntheticEvent<HTMLSelectElement>) => void;
  selectHandler?: (value: readonly string[]) => void;
  selectedValues?: string[];
}

export interface TextAreaFieldProps extends FieldProps {
  type: 'textarea';
  onChange: (event: SyntheticEvent<HTMLTextAreaElement>) => void;
}

export interface TextFieldProps extends FieldProps {
  type: 'text' | 'email' | 'password';
  onChange: (event: SyntheticEvent<HTMLInputElement>) => void;
}
