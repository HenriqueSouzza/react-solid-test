import React, { InputHTMLAttributes } from 'react';
import styled from "styled-components";
import { CssProps } from "@/interfaces";
import { Component } from '..';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  css?: CssProps
  fullWidth?: boolean
  label?: string
}

const Label = styled.label`
  transform-origin: left top;
  transform: translate(14px, -9px) scale(0.75);
  position: absolute;
  top: 0;
  left: 0;
  color: #993399;
`;

const Fieldset = styled.fieldset`
  padding: 0 10px;
  inset: -5px 0px 0px;
  border-color: #993399;
  border-width: 2px;
  border-radius: 5px;
  border-style: solid;
  position: absolute;
  pointer-events: none;
  padding: 0 8px;
  text-align: left;

  legend {
    width: auto;
    height: 5px;
    padding: 0;
    font-size: 0.75em;

    span {
      padding-left: 5px;
      transform: translate(14px, -9px) scale(0.75);
      transform-origin: left top;
      opacity: 0;
    }
  }
`;

const Field = styled.div`
  position: relative;
  display: inline-flex;
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

const ComponentCustom = ({ label = 'label', ...props }: InputProps) => (
  <Container>
    <Label>{label}</Label>
    <Field>
      <Component component='input' {...props} />
      <Fieldset>
        <legend>
          <span>{label}</span>
        </legend>
      </Fieldset>
    </Field>
  </Container>
)

export const Input = styled(ComponentCustom)(({ css }: InputProps) => ({
  width: '100%',
  padding: '16px 14px',
  backgroundColor: 'transparent',
  borderRadius: 'inherit',
  outline: 'none',
  borderWidth: 0,
  boxSizing: 'content-box',
  color: '#fff',
  fontSize: 'inherit',
  '&:-internal-autofill-selected': {
    backgroundColor: 'ActiveBorder',
  },
  '&:focus': {
    background: 'transparent',
    borderStyle: 'solid',
  },
  ...css,
}));
