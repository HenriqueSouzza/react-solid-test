import styled from 'styled-components';
import { CommonProps } from '@/interfaces';
import { Component } from '@/components';

interface CardProps extends CommonProps { }

export const Card = styled(Component)(({ css }: CardProps) => ({
  width: '400px',
  gap: '35px',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  padding: '25px 10px',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  '@media (max-width: 768px)': {
    width: '100%',
    height: '100vh',
    padding: 0,
  },
  ...css
}));
