import React from "react";
import { render } from '@testing-library/react';
import { Close } from ".";

describe('Close', () => {
  it('should render icon', () => {
    const { getByTestId } = render(
      <Close height={20} width={10} />
    );

    const Icon = getByTestId('Close');

    expect(Icon).toHaveAttribute('height', '20px');
    expect(Icon).toHaveAttribute('width', '10px');
  })
})