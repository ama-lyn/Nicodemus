
import React from "react";
import clsx from "clsx";


type ButtonProps = {
  text: string;
  color?: string; // a valid Tailwind color class
  fontSize?: string; // a valid Tailwind font size class
  buttoncolor?: string;
  underline?:string;
};

const Button = ({
  text,
  color,
  underline,
  buttoncolor,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        color,
        buttoncolor,
        underline,
        "rounded-md",
        "text-[15px]",
        "border-[1.5px]",
        "border-background",
        "border-solid",
        "px-2",
        "py-1",
        "w-auto",
        "font-thin"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
