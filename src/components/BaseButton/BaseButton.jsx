const BaseButton = ({ onClick, type = "button", className, fullWidth, text }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} ${fullWidth ? "full-width" : ""}`}
    >
      {text}
    </button>
  );
};

export default BaseButton;
