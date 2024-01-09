import { ButtonHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";
import { CssProps } from "@/interfaces";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  css?: CssProps
  fullWidth?: boolean
  $outlined?: boolean
  $noborder?: boolean
  onClick?: () => void
}

const Component = forwardRef<HTMLButtonElement, ButtonProps>(({ fullWidth, ...props }, ref) => {
  return <button ref={ref} {...props} />
});

export const Button = styled(Component)(({ css, fullWidth, $outlined, $noborder }: ButtonProps) => {
  if (fullWidth) {
    css = {
      ...css,
      width: '100%',
      justifyContent: 'center',
    }
  }

  if ($outlined) {
    css = {
      ...css,
      color: '#363636',
      boxShadow: 'none',
      border: '2px solid #4801FF',
      background: 'transparent',
    }
  }

  if ($noborder) {
    css = {
      ...css,
      border: 0,
    }
  }

  return {
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
  }
});