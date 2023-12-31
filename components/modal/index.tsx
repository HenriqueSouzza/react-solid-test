import { MouseEvent } from 'react';
import styled from 'styled-components';
import { CommonProps } from '@/interfaces';
import { Close } from '@/icons';
import { Button } from '@/components';

interface ModalProps extends CommonProps {
  open?: boolean
  showIconClose?: boolean
  onClickClose: () => void
}

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background:rgba(0,0,0,0.3);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonClose = styled(Button)(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
}));

const Component = ({ open, showIconClose, children, onClickClose, ...props }: ModalProps) => {
  if (!open) {
    return null;
  }

  const onClick = (e: MouseEvent) => {
    const refClassName = (e.target as Element).className;

    if (!refClassName || typeof refClassName !== 'string') {
      return;
    }

    if (!refClassName.includes('background-modal')) {
      return;
    }

    onClickClose();
  }

  return (
    <Background className='background-modal' onClick={onClick}>
      <dialog {...props}>
        {showIconClose && (
          <ButtonClose
            $noborder
            $outlined
            className='btn-close'
            onClick={onClickClose}
          >
            <Close width={25} />
          </ButtonClose>
        )}
        {children || 'Sem conteúdo para apresentar'}
      </dialog>
    </Background>
  )
}

export const Modal = styled(Component)(({ css, children }: ModalProps) => {
  if (!children || !css) {
    css = {
      width: '50%',
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...css,
    }
  }

  return {
    padding: '30px 25px 15px 25px',
    position: 'relative',
    borderRadius: '5px',
    display: 'block',
    background: '#fff',
    '@media (max-width: 768px)': {
      width: '100%',
      height: 'calc(100vh - 45px)',
    },
    ...css
  }
});
