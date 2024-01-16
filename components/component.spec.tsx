import React from 'react';
import { render } from '@testing-library/react';
import { Component } from ".";

describe('Component', () => {
  it('should component with tag button', () => {
    const { getByText } = render(<Component component='main' />);
    const tagName = getByText(({ }, element) => element?.tagName.toLowerCase() === 'main');
    expect(tagName).toBeInTheDocument();
  })

  it('should render with element children', () => {
    const { getByText } = render(<Component>teste</Component>)
    expect(getByText('teste')).toBeInTheDocument();
  })

  it("should render without children", () => {
    const { queryByText } = render(<Component component='span' />)
    expect(queryByText('teste')).toBeNull();
  })
})