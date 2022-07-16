import React from "react";
import { ButtonProps } from "./types";
export const Button = ({ color }: ButtonProps) => {
    const btnColor = color;

    return <button style={{ backgroundColor: color }}>Button color is {btnColor} </button>;
};
