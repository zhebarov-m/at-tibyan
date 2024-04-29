import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  className,
  size = "medium",
  ...props
}) => {
  return (
    <button
      className={`rounded-lg focus:outline-none transition-colors duration-300 ease-in-out border border-gray-300 ${
        size === "small"
          ? "py-1 px-2 text-xs"
          : size === "large"
          ? "py-3 px-6 text-lg"
          : "py-1 px-3 text-xs sd:text-base lg:text-lg"
      } hover:bg-[#009c9c] hover:text-white ${className} dark:bg-gray-800 dark:hover:bg-[#009c9c] dark:text-white`}
      {...props}
    ></button>
  );
};

export default Button;
