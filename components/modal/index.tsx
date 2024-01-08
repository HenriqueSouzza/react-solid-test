import { MouseEvent, useRef } from 'react';
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
`;

const Component = ({ open, showIconClose, children, onClickClose, ...props }: ModalProps) => {
  const refBtnClose = useRef(null);

  if (!open) {
    return null;
  }

  const onClick = (e: MouseEvent) => {
    if (refBtnClose.current && (refBtnClose.current as Element).className !== 'string') {
      return;
    }

    if (!(e.target as Element).className.includes('background-modal')) {
      return;
    }

    onClickClose();
  }

  return (
    <Background className='background-modal' onClick={onClick}>
      <dialog {...props}>
        {showIconClose && (
          <button className='btn-close' ref={refBtnClose} onClick={onClickClose}>
            <Close width={25} />
          </button>
        )}
        {children || 'Sem conteúdo para apresentar'}
      </dialog>
    </Background>
  )
}

export const Modal = styled(Component)(({ css, children, showIconClose }: ModalProps) => {
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

  if (showIconClose) {
    css = {
      ...css,
      '.btn-close': {
        position: 'absolute',
        top: '5px',
        right: '5px',
        background: 'transparent',
        cursor: 'pointer'
      }
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
