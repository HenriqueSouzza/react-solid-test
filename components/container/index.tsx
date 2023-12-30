import styled from 'styled-components';
import { CommonProps } from '@/interfaces';
import { Component } from '@/components';

type ContainerProps = CommonProps

export const Container = styled(Component)(({ css }: ContainerProps) => ({ ...css }));
