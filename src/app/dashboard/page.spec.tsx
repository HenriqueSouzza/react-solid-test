import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Dashboard from "./page";

describe('dashboard', () => {
  it('should delete user in the list', () => {
    const { getByTestId, getByText, getAllByTestId } = render(
      <Dashboard />
    );

    const idRandom = Math.floor(Math.random() * 2);

    const buttonDeleteUser = getAllByTestId('btn-delete')[idRandom];
    fireEvent.click(buttonDeleteUser);

    const buttonRemoveUser = getByText('Remover usuário');
    fireEvent.click(buttonRemoveUser);

    expect(getByTestId('tbody').children).toHaveLength(2);
  });

  it('should add user in the list', () => {
    const { getByText, getByLabelText } = render(
      <Dashboard />
    );

    const buttonNewUser = getByText('Novo Usuário');
    fireEvent.click(buttonNewUser);

    const inputFirstName = getByLabelText('Primeiro nome');
    fireEvent.change(inputFirstName, { target: { value: 'washington' } })

    const buttonCreate = getByText('Cadastrar');
    fireEvent.click(buttonCreate);

    expect(getByText('washington')).toBeInTheDocument();
  });

  it('should edit user in the list', () => {
    const { getByTestId, getByText, getByLabelText, getAllByTestId } = render(
      <Dashboard />
    );

    const idRandom = Math.floor(Math.random() * 2);

    const buttonEditUser = getAllByTestId('btn-edit')[idRandom];
    fireEvent.click(buttonEditUser);

    const inputFirstName = getByLabelText('Primeiro nome');
    fireEvent.change(inputFirstName, { target: { value: 'Ricardo' } })

    const buttonCreate = getByText('Alterar');
    fireEvent.click(buttonCreate);

    expect(getByTestId('tbody').children[idRandom]).toHaveTextContent('Ricardo');
  });
});