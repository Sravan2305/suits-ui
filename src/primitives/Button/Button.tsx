import React from "react";
import { ButtonProps } from "./types";
export const Button = ({ color, children }: ButtonProps) => (
    <button style={{ backgroundColor: color }}>{children}</button>
);
