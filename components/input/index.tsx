import React, { InputHTMLAttributes } from 'react';
import styled, { css } from "styled-components";
import { CssProps } from "@/interfaces";
import { Component } from '@/components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  css?: CssProps
  label?: string
  error?: boolean
  messageError?: string
}

const Container = styled.div<InputProps>`
  width: 100%;
  position: relative;
  display: inline-flex;
  flex-direction: column;

  label {
    transform-origin: left top;
    transform: translate(14px, -9px) scale(0.75);
    position: absolute;
    top: 0;
    left: 0;
    color: #993399;
  }

  div {
    position: relative;
    display: inline-flex;

    input {
      width: 100%;
      padding: 16px 14px;
      outline: none;
      font-size: inherit;
      box-sizing: content-box;
      border-width: 0;
      background-color: transparent;
      border-radius: inherit;
    }

    fieldset {
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
    }
  }

  .input-message-error {
    font-size: 14px;
    color: rgb(244, 67, 54);
    margin-left: 5px;
    padding: 5px 0;
    text-align: left;
  }

  ${({ error }) => error && css`
    label {
      color: rgb(244, 67, 54);
    }
    
    div > fieldset {
      border-color: rgb(244, 67, 54);
    }

    div > input {
      animation: shake 0.1s;
      animation-iteration-count: 3;
    }
  `}
`;

const InputGroup = ({ label = 'label', error, messageError, ...props }: InputProps) => (
  <Container error={error}>
    <label htmlFor={`${props.id}`}>{label}</label>
    <div>
      <Component id={`${props.id}`} component='input' {...props} />
      <fieldset>
        <legend>
          <span>{label}</span>
        </legend>
      </fieldset>
    </div>
    {error && <span className='input-message-error'>{messageError}</span>}
  </Container>
)

export const Input = styled(InputGroup)(({ css }: InputProps) => ({ ...css }));
