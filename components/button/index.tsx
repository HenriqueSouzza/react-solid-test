import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { CssProps } from "@/interfaces";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  css?: CssProps
  fullWidth?: boolean
}

const Component = (props: ButtonProps) => <button {...props} />

export const Button = styled(Component)(({ css }: ButtonProps) => ({
  width: '100%',
  borderWidth: '0',
  borderRadius: '4px',
  background: 'linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)',
  color: '#ffff',
  padding: '12px 13px',
  textTransform: 'uppercase',
  fontWeight: '500',
  fontSize: '0.875rem',
  cursor: 'pointer',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
  ...css
}));