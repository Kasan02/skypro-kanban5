const BaseInput = ({ tag: Tag = "input", className, as: StyledComponent, ...props }) => {
  return StyledComponent ? (
    <StyledComponent as={Tag} className={className} {...props} />
  ) : (
    <Tag className={className} {...props} />
  );
};

export default BaseInput;

