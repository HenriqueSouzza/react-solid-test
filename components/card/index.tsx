import styled from 'styled-components';
import { CommonProps } from '@/interfaces';
import { Component } from '@/components';

interface CardProps extends CommonProps { }

export const Card = styled(Component)(({ css }: CardProps) => ({ ...css }));
