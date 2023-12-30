import styled from 'styled-components';
import { CommonProps } from '@/interfaces';
import { Component } from '@/components';

type BoxProps = CommonProps

export const Box = styled(Component)(({ css }: BoxProps) => ({ ...css }));
