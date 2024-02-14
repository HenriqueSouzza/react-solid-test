import React from "react";
import { render } from '@testing-library/react';
import { Input } from ".";

describe('Input', () => {
  const message = {
    required: 'campo invalido',
  }

  it('should input with error', () => {
    const { getByText } = render(
      <Input
        error={+true}
        messageError={message.required}
      />
    );

    expect(getByText(message.required)).toBeInTheDocument();
  });

  it('should input without error', () => {
    const { queryByText } = render(
      <Input
        messageError={message.required}
      />
    );

    expect(queryByText(message.required)).toBeNull();
  });

  it('should render input with label', () => {
    const { getByLabelText } = render(
      <Input
        label="name"
      />
    );

    expect(getByLabelText('name')).toBeInTheDocument();
  });
});