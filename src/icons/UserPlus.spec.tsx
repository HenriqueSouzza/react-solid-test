import React from "react";
import { render } from '@testing-library/react';
import { UserPlus } from ".";

describe('UserPlus', () => {
  it('should render icon', () => {
    const { getByTestId } = render(
      <UserPlus height={20} width={10} />
    );

    const Icon = getByTestId('UserPlus');

    expect(Icon).toHaveAttribute('height', '20px');
    expect(Icon).toHaveAttribute('width', '10px');
  })
})