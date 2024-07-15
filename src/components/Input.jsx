import React, { useState } from "react";

const Input = ({ onChange, value, placeholder }) => {
  return (
    <input
      className="custom-input"
      name="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
