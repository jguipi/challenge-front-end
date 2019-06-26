import React from "react";

const Divider = ({ text }) => {
  return (
    <div className="divider">
      <span />
      <span>{text}</span>
      <span />
    </div>
  );
};

export { Divider };
