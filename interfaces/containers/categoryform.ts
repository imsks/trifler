export interface CategoryFormProps {
  name: string;
  description: string;
  setName: (value: string) => void;
  setDescription: (value: string) => void;
  formError: string;
  submitButtonText: string;
  submitHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
