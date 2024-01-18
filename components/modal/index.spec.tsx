import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Modal } from ".";

describe('Modal', () => {
  const dataTestIds = {
    btnClose: 'btn-close',
    backgroundModal: 'background-modal'
  }

  it('shouldn show nothing if prop open not exists', () => {
    const { queryByTestId } = render(
      <Modal />
    );

    expect(queryByTestId(dataTestIds.backgroundModal)).toBeNull();
  });

  it('should render with btn-close and call', () => {
    const onClickClose = jest.fn();

    const { getByTestId } = render(
      <Modal
        open
        showIconClose
        onClickClose={onClickClose}
      />
    );

    fireEvent.click(getByTestId(dataTestIds.btnClose));
    fireEvent.click(getByTestId(dataTestIds.backgroundModal));

    expect(onClickClose).toHaveBeenCalledTimes(2);
  });

  it('should render with message "Sem conteúdo para apresentar"', () => {
    const messageNotContent = 'Sem conteúdo para apresentar'
    const { getByText } = render(
      <Modal open />
    );

    expect(getByText(messageNotContent)).toBeInTheDocument();
  })
})