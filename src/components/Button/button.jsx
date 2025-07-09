import { StyledButton } from './button.styled';

const Button = ({ text, ...props }) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};

export default Button;
