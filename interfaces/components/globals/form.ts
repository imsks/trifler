export type InputFieldProps = {
  type: 'button' | 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  showLabel?: boolean;
};

export type TextAreaProps = {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  showLabel?: boolean;
};
