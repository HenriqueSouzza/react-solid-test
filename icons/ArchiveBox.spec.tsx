import React from "react";
import { render } from '@testing-library/react';
import { ArchiveBox } from ".";

describe('ArchiveBox', () => {
  it('should render icon', () => {
    const { getByTestId } = render(
      <ArchiveBox testId="ArchiveBox" height={20} width={10} />
    );

    const Icon = getByTestId('ArchiveBox');

    expect(Icon).toHaveAttribute('height', '20px');
    expect(Icon).toHaveAttribute('width', '10px');
  })
})