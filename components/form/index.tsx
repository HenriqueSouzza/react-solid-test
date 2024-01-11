import React, { FormHTMLAttributes } from 'react';
import styled from "styled-components";
import { CssProps } from "@/interfaces";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  css?: CssProps
  onSubmit: (item: any) => void
}

const FormGroup = ({ onSubmit, ...props }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const interactorData = new FormData(event.currentTarget).entries();
    return onSubmit(Object.fromEntries(interactorData));
  }

  return (
    <form
      onSubmit={handleSubmit}
      {...props}
    />
  )
}

export const Form = styled(FormGroup)(({ css }: FormProps) => ({ ...css }));
