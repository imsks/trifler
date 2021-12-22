export type InputFieldProps = {
  type: 'button' | 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  showLabel?: boolean;
  autoFocus?: boolean;
};

export type TextAreaProps = {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  showLabel?: boolean;
};

export interface SelectInputFieldProps {
  showLabel?: boolean;
  placeholder: string;
  selectOptions?: Array<SelectOptionsType>;
  noOptionsText?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export type SelectOptionsType = {
  label: string;
  value: string;
  disabled?: boolean;
};
