export type InputProps = {
  type?: string;
  name: string;
  rows?: number;
  placeholder: string;
  errors: any;
  register: Function;
  validationSchema: Object;
  children?: JSX.Element;
};
