import React from 'react';
import { CommonProps } from '@/interfaces';
import styled from 'styled-components';
import { Component } from '@/components';

type CardContentProps = CommonProps

export const CardContent = styled(Component)(({ css }: CardContentProps) => ({ ...css }));