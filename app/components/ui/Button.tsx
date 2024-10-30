
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
  fontSize = "text-[12px]",
  buttoncolor = "bg-button hover:bg-sky",
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        color,
        fontSize,
        buttoncolor,
        underline,
        "rounded-[24px]",
        "border-[1.5px]",
        "border-background",
        "border-solid",
        "p-2",
        "w-auto",
        "font-thin"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
