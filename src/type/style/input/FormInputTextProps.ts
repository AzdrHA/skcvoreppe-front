export type FormInputTextProps = {
  type: 'text' | 'password' | 'email' | 'date';
  required?: boolean;
  placeholder?: string;
  id: string;
  register: any;
  icon?: JSX.Element;
  extraClass?: string;
}
