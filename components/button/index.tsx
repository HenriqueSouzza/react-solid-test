import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { CssProps } from "@/interfaces";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  css: CssProps
}

const Component = (props: ButtonProps) => <button {...props} />

export const Button = styled(Component)(({ css }: ButtonProps) => ({ ...css }));