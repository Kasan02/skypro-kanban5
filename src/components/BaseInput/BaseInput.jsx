import { StyledInput, StyledTextarea } from "./BaseInput.styled";

const BaseInput = ({
  tag = "input",
  id,
  name,
  placeholder = "",
  type = "text",
  error = false,
  onChange,
  value,
  disabled,
}) => {
  const Component = tag === "textarea" ? StyledTextarea : StyledInput;

  return (
    <Component
      as={Component}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      $hasError={error}
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
  );
};

export default BaseInput;




