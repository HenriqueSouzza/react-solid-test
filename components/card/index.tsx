import styled from 'styled-components';
import { CommonProps } from '@/interfaces';
import { Component } from '@/components';

type CardProps = CommonProps

export const Card = styled(Component)(({ css }: CardProps) => ({ ...css }));
