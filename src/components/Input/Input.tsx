import { InputProps } from '@/types/input';

const InputText = (props: InputProps) => {
  return (
    <div
      className={`position-relative ${
        props.errors[props.name] ? 'mb-2' : 'mb-3'
      }`}
    >
      <input
        type={props.type}
        name={props.name}
        className={`form-control ${
          props.errors[props.name] ? 'is-invalid' : ''
        }`}
        placeholder={props.placeholder}
        {...props.register(props.name, props.validationSchema)}
      />
      <div className="invalid-feedback">
        {props.errors[props.name]?.message}
      </div>
      {props.children}
    </div>
  );
};

const InputTextarea = (props: InputProps) => {
  return (
    <div className="position-relative mb-3">
      <textarea
        name={props.name}
        rows={props.rows}
        className={`form-control ${
          props.errors[props.name] ? 'is-invalid' : ''
        }`}
        placeholder={props.placeholder}
        {...props.register(props.name, props.validationSchema)}
      />
      <div className="invalid-feedback">
        {props.errors[props.name]?.message}
      </div>
      {props.children}
    </div>
  );
};

const Input = (props: InputProps) => {
  switch (props.type) {
    case 'textarea':
      return <InputTextarea {...props} />;
    default:
      return <InputText {...props} />;
  }
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
