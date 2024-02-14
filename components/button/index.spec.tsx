import React from "react";
import { Button } from "."
import { fireEvent, render } from '@testing-library/react';

describe('Button', () => {
  it('should call event', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button onClick={onClick}>
        enviar
      </Button>
    );

    fireEvent.click(getByText('enviar'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should render button fullWidth', () => {
    const { getByText } = render(
      <Button fullWidth>
        enviar
      </Button>
    );

    const buttonWidth = window.getComputedStyle(getByText('enviar')).width;
    expect(buttonWidth).toBe('100%');
  });

  it('should render button outlined', () => {
    const { getByText } = render(
      <Button $outlined>
        enviar
      </Button>
    );

    const buttonBackground = window.getComputedStyle(getByText('enviar')).background;
    expect(buttonBackground).toBe('transparent');
  });

  it('should render button noBorder', () => {
    const { getByText } = render(
      <Button $noborder>
        enviar
      </Button>
    );

    const buttonNoBorder = window.getComputedStyle(getByText('enviar')).border;
    expect(buttonNoBorder).toBe('0px');
  });
})