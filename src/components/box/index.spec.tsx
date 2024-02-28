import React from "react";
import { Box } from "."
import { render } from '@testing-library/react';

describe('Box', () => {
  it('should render Box with text color red', () => {
    const { getByText } = render(<Box css={{ color: 'red' }}>teste</Box>);
    const styles = window.getComputedStyle(getByText('teste'));
    expect(styles.color).toBe('red');
  })
})