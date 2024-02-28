import React from "react";
import { render } from '@testing-library/react';
import { Spinner } from ".";

describe('Spinner', () => {
  it('should render icon', () => {
    const { getByTestId } = render(
      <Spinner height={20} width={10} />
    );

    const Icon = getByTestId('Spinner');

    expect(Icon).toHaveAttribute('height', '20px');
    expect(Icon).toHaveAttribute('width', '10px');
  })
})