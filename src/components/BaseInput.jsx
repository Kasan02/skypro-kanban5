import React from "react";

const BaseInput = ({ tag: Tag = "input", className, ...props }) => {
  return <Tag className={className} {...props} />;
};

export default BaseInput;
