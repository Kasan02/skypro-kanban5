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
}) => {
  const Component = tag === "textarea" ? StyledTextarea : StyledInput;

  return (
    <Component
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      $error={error} // ⬅️ используем $error, чтобы не попадал в DOM
      onChange={onChange}
      value={value}
    />
  );
};

export default BaseInput;



