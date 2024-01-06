import { MouseEvent } from 'react';
import styled from 'styled-components';
import { CommonProps } from '@/interfaces';
import { Close } from '@/icons';

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
  cursor: pointer;
`;

const Component = ({ open, showIconClose, children, onClickClose, ...props }: ModalProps) => {
  if (!open) {
    return null;
  }

  const onClick = (e: MouseEvent) => {
    if ((e.target as Element).tagName === 'DIALOG') {
      return;
    }

    onClickClose();
  }

  return (
    <Background onClick={onClick}>
      <dialog {...props}>
        {showIconClose && (
          <button onClick={onClickClose}>
            <Close width={25} />
          </button>
        )}
        {children || 'Sem conteúdo para apresentar'}
      </dialog>
    </Background>
  )
}

export const Modal = styled(Component)(({ css, children, showIconClose, ...props }: ModalProps) => {
  if (!children || !css) {
    css = {
      width: '50%',
      height: '10%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...css,
    }
  }

  if (showIconClose) {
    css = {
      ...css,
      'button': {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'transparent',
        cursor: 'pointer'
      }
    }
  }

  return {
    position: 'relative',
    borderRadius: '5px',
    display: 'block',
    background: '#fff',
    '@media (max-width: 768px)': {
      width: '100%',
      height: '100vh'
    },
    ...css
  }
});
