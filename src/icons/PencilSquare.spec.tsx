import React from "react";
import { render } from '@testing-library/react';
import { PencilSquare } from ".";

describe('PencilSquare', () => {
  it('should render icon', () => {
    const { getByTestId } = render(
      <PencilSquare height={20} width={10} />
    );

    const Icon = getByTestId('PencilSquare');

    expect(Icon).toHaveAttribute('height', '20px');
    expect(Icon).toHaveAttribute('width', '10px');
  })
})