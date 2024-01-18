import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Table } from ".";
import { dataTableEmptyMock, dataTableMock } from '@/__mocks';

describe('Table', () => {
  const dataTestIds = {
    thead: 'thead',
    tbody: 'tbody',
    btnEdit: 'btn-edit',
    btnDelete: 'btn-delete'
  }

  it('should show text at table without actions', () => {
    const { getByText, queryByTestId, queryByText } = render(
      <Table
        data={dataTableMock}
      />
    );

    Object.values(dataTableMock.thead).forEach(thread => {
      expect(getByText(`${thread}`)).toBeInTheDocument();
    });

    Object.values(dataTableMock.tbody).forEach((tbody: any) => {
      expect(getByText(`${tbody.id}`)).toBeInTheDocument();
      expect(getByText(`${tbody.name}`)).toBeInTheDocument();
    });

    expect(queryByText('Actions')).toBeNull();
    expect(queryByTestId(dataTestIds.btnEdit)).toBeNull();
    expect(queryByTestId(dataTestIds.btnDelete)).toBeNull();
  });

  it('should show table without data', () => {
    const { getByTestId } = render(
      <Table
        data={dataTableEmptyMock}
      />
    )

    expect(getByTestId(dataTestIds.thead).childNodes[0].childNodes.length).toBe(0);
    expect(getByTestId(dataTestIds.tbody).childNodes.length).toBe(0);
  });

  it('should show table with actions and to verify called', () => {
    const onClickDelete = jest.fn();
    const onClickEdit = jest.fn();

    const { getByTestId } = render(
      <Table
        data={dataTableMock}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
      />
    )

    fireEvent.click(getByTestId(dataTestIds.btnEdit));
    expect(onClickEdit).toHaveBeenCalledWith(dataTableMock.tbody[0]);

    fireEvent.click(getByTestId(dataTestIds.btnDelete));
    expect(onClickDelete).toHaveBeenCalledWith(dataTableMock.tbody[0]);
  })
})