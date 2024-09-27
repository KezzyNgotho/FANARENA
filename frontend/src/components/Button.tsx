import React from 'react';

// Define the prop types
type ButtonProps = {
  text: string;  // Ensure text is part of Button's props
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
