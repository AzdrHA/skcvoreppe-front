export type FormInputTextProps = {
  type: 'text' | 'password' | 'email';
  required?: boolean;
  placeholder?: string;
  id: string;
  register: any;
  icon?: JSX.Element;
  extraClass?: string;
}
