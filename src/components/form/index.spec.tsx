import React from "react";
import { fireEvent, render } from '@testing-library/react';
import { Form } from ".";

describe('Form', () => {
  it('should call formdata onSubmit', () => {
    const onSubmit = jest.fn();

    const { getByText } = render(
      <Form onSubmit={onSubmit}>
        <input type="text" name="year" defaultValue="2002"></input>
        <button>enviar</button>
      </Form>
    );

    fireEvent.click(getByText('enviar'));
    expect(onSubmit).toHaveBeenCalledWith({ year: "2002" });
  })
})