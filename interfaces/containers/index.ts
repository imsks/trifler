import { IconType } from 'react-icons';
import { SelectOptionsType } from 'interfaces';

export interface ContactFormProps {
  name: string;
  contactNo: string;
  categoryName?: string;
  setName: (value: string) => void;
  setContactNo: (value: string) => void;
  setCategoryName: (value: string) => void;
  setCategory: (value: SelectOptionsType) => void;
  selectOptions: SelectOptionsType[];
  addContactClicked: boolean;
  handleSelectCategory: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  formError: string;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface CategoryFormProps {
  name: string;
  description: string;
  setName: (value: string) => void;
  setDescription: (value: string) => void;
  formError: string;
  submitButtonText: string;
  submitHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface IconContainerProps {
  IconName: IconType;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  iconClassName?: string;
  containerClassName?: string;
  activeIconClassName?: string;
}
