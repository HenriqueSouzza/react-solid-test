import React from "react";
import { render } from '@testing-library/react';
import { AccountCircle } from ".";

describe('AccountCircle', () => {
  it('should render icon', () => {
    const { getByTestId } = render(
      <AccountCircle height={20} width={10} />
    );

    const Icon = getByTestId('AccountCircle');

    expect(Icon).toHaveAttribute('height', '20px');
    expect(Icon).toHaveAttribute('width', '10px');
  })
})