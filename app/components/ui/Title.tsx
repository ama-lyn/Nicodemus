import React from "react";
import { Rowdies } from "next/font/google";
import clsx from "clsx";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type TitleProps = {
  text: string;
  color?: string;  // a valid Tailwind color class
  fontSize?: string;  // a valid Tailwind font size class
  responsiveFontSize?: string; // a valid Tailwind responsive font size class
};

const Title = ({
  text,
  color = "text-title",
  fontSize = "text-h2-light",
  responsiveFontSize = "text-h2-regular"
}: TitleProps) => {
  return (
    <h1 className={clsx(rowdies.className, color, fontSize, responsiveFontSize)}>
      {text}
    </h1>
  );
};

export default Title;